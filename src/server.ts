import express from 'express';
import { telegramService } from './bots/telegram';
import { TaskScheduler } from './bots/scheduler';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const chatId = process.env.TELEGRAM_CHAT_ID || '129862775';
const scheduler = new TaskScheduler({
  chatId,
  timezone: 'Asia/Bangkok',
  getTasksCallback: () => {
    const tasks = telegramService.getTasks();
    return Promise.resolve({
      pending: tasks.pending.map(t => t.text),
      completed: tasks.completed.map(t => t.text),
      urgent: tasks.urgent.map(t => t.text)
    });
  }
});

app.post(`/bot${process.env.TELEGRAM_BOT_TOKEN}`, (req, res) => {
  telegramService.getBot().processUpdate(req.body);
  res.sendStatus(200);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/status', (req, res) => {
  const tasks = telegramService.getTasks();
  res.json({
    pending: tasks.pending.length,
    completed: tasks.completed.length,
    urgent: tasks.urgent.length
  });
});

app.listen(PORT, () => {
  console.log(`[Server] Running on port ${PORT}`);

  const webhookUrl = process.env.WEBHOOK_URL;
  if (webhookUrl) {
    telegramService.setWebhook(`${webhookUrl}/bot${process.env.TELEGRAM_BOT_TOKEN}`);
  } else {
    telegramService.startPolling();
  }

  scheduler.startDailyRecap();
});

export default app;
