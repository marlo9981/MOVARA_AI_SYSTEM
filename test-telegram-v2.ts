import dotenv from 'dotenv';
import { telegramService } from './src/bots/telegram';
import { formatRecap } from './src/bots/recapGenerator';
import { TaskScheduler } from './src/bots/scheduler';

dotenv.config();

async function testBot() {
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  if (!chatId) {
    console.error('Error: TELEGRAM_CHAT_ID not set in .env');
    process.exit(1);
  }

  try {
    console.log('1. Sending welcome message...');
    await telegramService.sendMessage(chatId, `🚀 *Task.Ahlian Bot v2*\n\nBot upgraded! Try these commands:\n\n/help - Show commands\n/tasks - List tasks\n/status - System status\n/add - Add task\n/done <id> - Complete task\n\nOr just type a message to add a task!`);
    console.log('✅ Welcome sent');

    console.log('\n2. Adding test tasks...');
    telegramService.addTask('Build VSCode extension hook', 'high');
    telegramService.addTask('Design Kanban board UI', 'medium');
    telegramService.addTask('Write documentation', 'low');
    console.log('✅ 3 tasks added');

    console.log('\n3. Sending task list...');
    const tasks = telegramService.getTasks();
    let taskMsg = `📋 *Tasks (${tasks.pending.length} pending)*\n\n`;
    tasks.pending.forEach(task => {
      const icon = task.priority === 'high' ? '🔴' : task.priority === 'medium' ? '🟡' : '🟢';
      taskMsg += `${icon} #${task.id} - ${task.text}\n`;
    });
    await telegramService.sendMessage(chatId, taskMsg);
    console.log('✅ Task list sent');

    console.log('\n4. Sending system status...');
    const statusMsg = `📊 *System Status*\n\n• Total: ${tasks.pending.length + tasks.completed.length}\n• Pending: ${tasks.pending.length}\n• Completed: ${tasks.completed.length}\n• Urgent: ${tasks.urgent.length}\n• Bot: ✅ Online\n• Scheduler: ✅ Active`;
    await telegramService.sendMessage(chatId, statusMsg);
    console.log('✅ Status sent');

    console.log('\n5. Sending test recap...');
    const recap = formatRecap({
      title: 'Daily Recap',
      summary: 'All systems operational. Bot v2 deployed.',
      keyPoints: [
        'Interactive commands active',
        'Task management ready',
        'Scheduler running at 9am'
      ],
      actionItems: [
        'Test commands in Telegram',
        'Add real tasks',
        'Monitor 9am delivery'
      ]
    });
    await telegramService.sendMessage(chatId, recap);
    console.log('✅ Recap sent');

    console.log('\n✅ All tests passed! Check Telegram for messages.');
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
}

testBot();
