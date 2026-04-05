import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

interface Task {
  id: string;
  text: string;
  status: 'pending' | 'completed';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}

interface CommandHandler {
  command: string;
  description: string;
  handler: (msg: TelegramBot.Message) => Promise<void>;
}

export class TelegramService {
  private bot: TelegramBot;
  private tasks: Task[] = [];
  private commandHandlers: CommandHandler[] = [];
  private awaitingTaskInput: Set<number> = new Set();

  constructor() {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    if (!token) {
      throw new Error('TELEGRAM_BOT_TOKEN is required');
    }

    this.bot = new TelegramBot(token, { polling: false });
    this.setupCommands();
    this.setupMessageListener();
  }

  private setupCommands(): void {
    this.commandHandlers = [
      {
        command: '/help',
        description: 'Show available commands',
        handler: this.handleHelp.bind(this)
      },
      {
        command: '/tasks',
        description: 'List all tasks',
        handler: this.handleTasks.bind(this)
      },
      {
        command: '/status',
        description: 'Show system status',
        handler: this.handleStatus.bind(this)
      },
      {
        command: '/add',
        description: 'Add a new task',
        handler: this.handleAddTask.bind(this)
      },
      {
        command: '/done',
        description: 'Mark task as complete',
        handler: this.handleDoneTask.bind(this)
      },
      {
        command: '/delete',
        description: 'Delete a task',
        handler: this.handleDeleteTask.bind(this)
      }
    ];
  }

  private setupMessageListener(): void {
    this.bot.on('message', async (msg) => {
      const chatId = msg.chat.id;
      const text = msg.text || '';

      if (text.startsWith('/')) {
        await this.handleCommand(chatId, text, msg);
      } else if (this.awaitingTaskInput.has(chatId)) {
        await this.processTaskInput(chatId, text, msg);
      }
    });

    this.bot.on('callback_query', async (callbackQuery) => {
      await this.handleCallback(callbackQuery);
    });
  }

  private async handleCommand(chatId: number, text: string, msg: TelegramBot.Message): Promise<void> {
    const [command, ...args] = text.split(' ');
    const handler = this.commandHandlers.find(h => h.command === command.toLowerCase());

    if (handler) {
      await handler.handler(msg);
    } else {
      await this.sendMessage(chatId.toString(), '❌ Unknown command. Use /help to see available commands.');
    }
  }

  private async handleHelp(msg: TelegramBot.Message): Promise<void> {
    const chatId = msg.chat.id.toString();
    let message = `🤖 *Task.Ahlian Bot*\n\n`;
    message += `*Available Commands:*\n`;

    this.commandHandlers.forEach(h => {
      message += `${h.command} - ${h.description}\n`;
    });

    message += `\n*Quick Actions:*\n`;
    message += `• Just type a message to add a task\n`;
    message += `• Use /done <id> to complete a task\n`;
    message += `• Use /delete <id> to remove a task\n`;

    const inlineKeyboard = {
      inline_keyboard: [
        [
          { text: '📋 Tasks', callback_data: 'show_tasks' },
          { text: '📊 Status', callback_data: 'show_status' }
        ],
        [
          { text: '➕ Add Task', callback_data: 'add_task' }
        ]
      ]
    };

    await this.bot.sendMessage(chatId, message, {
      parse_mode: 'Markdown',
      reply_markup: inlineKeyboard
    });
  }

  private async handleTasks(msg: TelegramBot.Message): Promise<void> {
    const chatId = msg.chat.id.toString();

    if (this.tasks.length === 0) {
      await this.sendMessage(chatId, '📋 No tasks yet. Use /add or just type a message to create one!');
      return;
    }

    const pending = this.tasks.filter(t => t.status === 'pending');
    const completed = this.tasks.filter(t => t.status === 'completed');

    let message = `📋 *Tasks (${this.tasks.length})*\n\n`;

    if (pending.length > 0) {
      message += `*Pending (${pending.length}):*\n`;
      pending.forEach(task => {
        const priorityIcon = task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢';
        message += `${priorityIcon} #${task.id} - ${task.text}\n`;
      });
    }

    if (completed.length > 0) {
      message += `\n*Completed (${completed.length}):*\n`;
      completed.slice(-3).forEach(task => {
        message += `✅ #${task.id} - ${task.text}\n`;
      });
    }

    const inlineKeyboard = {
      inline_keyboard: pending.slice(0, 5).map(task => [
        { text: `✅ #${task.id}`, callback_data: `done_${task.id}` }
      ])
    };

    if (pending.length > 0) {
      await this.bot.sendMessage(chatId, message, {
        parse_mode: 'Markdown',
        reply_markup: inlineKeyboard
      });
    } else {
      await this.sendMessage(chatId, message);
    }
  }

  private async handleStatus(msg: TelegramBot.Message): Promise<void> {
    const chatId = msg.chat.id.toString();
    const pending = this.tasks.filter(t => t.status === 'pending').length;
    const completed = this.tasks.filter(t => t.status === 'completed').length;
    const highPriority = this.tasks.filter(t => t.priority === 'high' && t.status === 'pending').length;

    let message = `📊 *System Status*\n\n`;
    message += `• Total Tasks: ${this.tasks.length}\n`;
    message += `• Pending: ${pending}\n`;
    message += `• Completed: ${completed}\n`;
    message += `• High Priority: ${highPriority}\n`;
    message += `• Bot Status: ✅ Online\n`;

    const completionRate = this.tasks.length > 0 ? Math.round((completed / this.tasks.length) * 100) : 0;
    message += `\n*Completion Rate:* ${completionRate}%`;

    await this.sendMessage(chatId, message);
  }

  private async handleAddTask(msg: TelegramBot.Message): Promise<void> {
    const chatId = msg.chat.id.toString();
    this.awaitingTaskInput.add(msg.chat.id);

    const message = `➕ *Add Task*\n\nType the task description:\n\n💡 Tip: Add #high or #low for priority (default: medium)`;
    await this.sendMessage(chatId, message);
  }

  private async handleDoneTask(msg: TelegramBot.Message): Promise<void> {
    const chatId = msg.chat.id.toString();
    const text = msg.text || '';
    const parts = text.split(' ');

    if (parts.length < 2) {
      await this.sendMessage(chatId, '❌ Usage: /done <task_id>\n\nExample: /done 1');
      return;
    }

    const taskId = parts[1];
    const task = this.tasks.find(t => t.id === taskId);

    if (!task) {
      await this.sendMessage(chatId, `❌ Task #${taskId} not found.`);
      return;
    }

    if (task.status === 'completed') {
      await this.sendMessage(chatId, `✅ Task #${taskId} is already completed.`);
      return;
    }

    task.status = 'completed';
    await this.sendMessage(chatId, `✅ Task #${taskId} marked as complete: ${task.text}`);
  }

  private async handleDeleteTask(msg: TelegramBot.Message): Promise<void> {
    const chatId = msg.chat.id.toString();
    const text = msg.text || '';
    const parts = text.split(' ');

    if (parts.length < 2) {
      await this.sendMessage(chatId, '❌ Usage: /delete <task_id>\n\nExample: /delete 1');
      return;
    }

    const taskId = parts[1];
    const index = this.tasks.findIndex(t => t.id === taskId);

    if (index === -1) {
      await this.sendMessage(chatId, `❌ Task #${taskId} not found.`);
      return;
    }

    const deleted = this.tasks.splice(index, 1)[0];
    await this.sendMessage(chatId, `🗑️ Deleted task #${taskId}: ${deleted.text}`);
  }

  private async processTaskInput(chatId: number, text: string, msg: TelegramBot.Message): Promise<void> {
    this.awaitingTaskInput.delete(chatId);

    let priority: Task['priority'] = 'medium';
    let taskText = text;

    if (text.toLowerCase().includes('#high')) {
      priority = 'high';
      taskText = text.replace(/#high/gi, '').trim();
    } else if (text.toLowerCase().includes('#low')) {
      priority = 'low';
      taskText = text.replace(/#low/gi, '').trim();
    }

    const task: Task = {
      id: String(this.tasks.length + 1).padStart(2, '0'),
      text: taskText,
      status: 'pending',
      priority,
      createdAt: new Date()
    };

    this.tasks.push(task);

    const priorityIcon = priority === 'high' ? '🔴' : priority === 'medium' ? '🟡' : '🟢';
    const message = `✅ Task added!\n\n${priorityIcon} *#${task.id}* - ${task.text}\n\nUse /tasks to view all tasks.`;
    await this.sendMessage(chatId.toString(), message);
  }

  private async handleCallback(callbackQuery: TelegramBot.CallbackQuery): Promise<void> {
    const chatId = callbackQuery.message?.chat.id;
    const data = callbackQuery.data;

    if (!chatId || !data) return;

    if (data === 'show_tasks') {
      await this.handleTasks({ chat: { id: chatId } } as TelegramBot.Message);
    } else if (data === 'show_status') {
      await this.handleStatus({ chat: { id: chatId } } as TelegramBot.Message);
    } else if (data === 'add_task') {
      this.awaitingTaskInput.add(chatId);
      await this.sendMessage(chatId.toString(), '➕ Type your task description:');
    } else if (data.startsWith('done_')) {
      const taskId = data.replace('done_', '');
      const task = this.tasks.find(t => t.id === taskId);

      if (task) {
        task.status = 'completed';
        await this.sendMessage(chatId.toString(), `✅ Task #${taskId} completed!`);
        await this.handleTasks({ chat: { id: chatId } } as TelegramBot.Message);
      }
    }

    await this.bot.answerCallbackQuery(callbackQuery.id);
  }

  async sendMessage(chatId: string, text: string): Promise<void> {
    try {
      await this.bot.sendMessage(chatId, text, { parse_mode: 'Markdown' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to send Telegram message: ${message}`);
    }
  }

  addTask(text: string, priority: Task['priority'] = 'medium'): Task {
    const task: Task = {
      id: String(this.tasks.length + 1).padStart(2, '0'),
      text,
      status: 'pending',
      priority,
      createdAt: new Date()
    };
    this.tasks.push(task);
    return task;
  }

  getTasks(): { pending: Task[]; completed: Task[]; urgent: Task[] } {
    const pending = this.tasks.filter(t => t.status === 'pending');
    const completed = this.tasks.filter(t => t.status === 'completed');
    const urgent = pending.filter(t => t.priority === 'high');

    return { pending, completed, urgent };
  }

  getBot(): TelegramBot {
    return this.bot;
  }

  startPolling(): void {
    this.bot.startPolling();
    console.log('[Telegram] Bot started with polling');
  }

  setWebhook(url: string): void {
    this.bot.setWebHook(url);
    console.log(`[Telegram] Webhook set to: ${url}`);
  }

  getWebhookServer(): TelegramBot {
    return this.bot;
  }
}

export const telegramService = new TelegramService();
