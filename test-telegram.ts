import dotenv from 'dotenv';
import { telegramService } from './src/bots/telegram';
import { formatRecap } from './src/bots/recapGenerator';

dotenv.config();

async function testTelegram() {
  const chatId = process.env.TELEGRAM_CHAT_ID;
  
  if (!chatId) {
    console.error('Error: TELEGRAM_CHAT_ID not set in .env');
    process.exit(1);
  }

  try {
    console.log('Sending test message...');
    await telegramService.sendMessage(chatId, '✅ *Movara AI System*\n\nTest message successful! Bot is operational.');
    console.log('Test message sent successfully!');

    const recapMessage = formatRecap({
      title: 'Daily System Recap',
      summary: 'All systems operational. Testing Telegram integration.',
      keyPoints: [
        'Telegram bot initialized',
        'Message delivery confirmed',
        'Recap formatting working'
      ],
      actionItems: [
        'Monitor bot performance',
        'Set up automated daily recaps'
      ]
    });

    console.log('\nSending test recap...');
    await telegramService.sendMessage(chatId, recapMessage);
    console.log('Test recap sent successfully!');
    
    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('Test failed:', error);
    process.exit(1);
  }
}

testTelegram();
