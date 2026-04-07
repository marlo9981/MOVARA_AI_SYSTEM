// Validates Gemini API integration for multi-model routing
import { gemini } from './scripts/gemini-wrapper.ts';

async function testGeminiConnection() {
  console.log('🧪 Testing Gemini API Connection via SDK Wrapper...\n');

  try {
    const text = await gemini.generateText('Say "Gemini API is working via SDK!" in exactly those words.');

    if (text.includes('Gemini API is working')) {
      console.log('✅ Gemini API Connection: SUCCESS');
      console.log('📝 Response:', text);
      console.log('\n✨ Phase 2: Multi-model routing is ready!');
      return true;
    } else {
      console.error('❌ Unexpected response:', text);
      return false;
    }
  } catch (error) {
    console.error('❌ Error during Gemini test:', error);
    return false;
  }
}

testGeminiConnection().then((success) => {
  process.exit(success ? 0 : 1);
});
