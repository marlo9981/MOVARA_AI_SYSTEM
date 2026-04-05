import cron from 'node-cron';
import { telegramService } from './telegram';
import { formatRecap } from './recapGenerator';

interface TaskSchedulerOptions {
  chatId: string;
  timezone?: string;
  getTasksCallback?: () => Promise<{ pending: string[]; completed: string[]; urgent: string[] }>;
}

export class TaskScheduler {
  private chatId: string;
  private timezone: string;
  private getTasksCallback?: TaskSchedulerOptions['getTasksCallback'];
  private jobs: ReturnType<typeof cron.schedule>[] = [];

  constructor(options: TaskSchedulerOptions) {
    this.chatId = options.chatId;
    this.timezone = options.timezone || 'UTC';
    this.getTasksCallback = options.getTasksCallback;
  }

  startDailyRecap(cronExpression: string = '0 9 * * *'): void {
    const job = cron.schedule(cronExpression, async () => {
      await this.sendDailyRecap();
    }, { timezone: this.timezone });

    this.jobs.push(job);
    console.log(`[Scheduler] Daily recap scheduled for 9:00 AM (${this.timezone})`);
  }

  private async sendDailyRecap(): Promise<void> {
    try {
      let recapData;

      if (this.getTasksCallback) {
        const tasks = await this.getTasksCallback();
        recapData = {
          title: 'Daily Task Recap',
          summary: `Yesterday: ${tasks.completed.length} completed. Today: ${tasks.pending.length} pending.`,
          keyPoints: [
            `${tasks.completed.length} tasks completed`,
            `${tasks.pending.length} tasks pending`,
            tasks.urgent.length > 0 ? `⚠️ ${tasks.urgent.length} urgent tasks` : 'No urgent tasks'
          ],
          actionItems: tasks.pending.slice(0, 5),
          timestamp: new Date()
        };
      } else {
        recapData = {
          title: 'Daily Recap',
          summary: 'No task data available. Connect your task source.',
          keyPoints: ['Scheduler is running', 'No task callback configured'],
          actionItems: ['Configure task source', 'Set up VSCode extension'],
          timestamp: new Date()
        };
      }

      const message = formatRecap(recapData);
      await telegramService.sendMessage(this.chatId, message);
      console.log('[Scheduler] Daily recap sent successfully');
    } catch (error) {
      console.error('[Scheduler] Failed to send daily recap:', error);
    }
  }

  stop(): void {
    this.jobs.forEach(job => job.stop());
    this.jobs = [];
    console.log('[Scheduler] All scheduled jobs stopped');
  }
}
