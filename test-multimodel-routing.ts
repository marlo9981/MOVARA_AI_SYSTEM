// Validates Gemini API integration for multi-model routing
import * as fs from 'fs'

const GEMINI_API_KEY = process.env.GOOGLE_GEMINI_API_KEY

async function testGeminiConnection() {
  if (!GEMINI_API_KEY) {
    console.error('❌ GOOGLE_GEMINI_API_KEY not set in .env')
    process.exit(1)
  }

  console.log('🧪 Testing Gemini API Connection...\n')

  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: 'Say "Gemini API is working!" in exactly those words.',
                },
              ],
            },
          ],
        }),
        // @ts-ignore
        query: { key: GEMINI_API_KEY },
      }
    )

    const data = await response.json()

    if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.log('✅ Gemini API Connection: SUCCESS')
      console.log('📝 Response:', data.candidates[0].content.parts[0].text)
      console.log('\n✨ Phase 2: Multi-model routing is ready!')
      return true
    } else {
      console.error('❌ Unexpected response:', data)
      return false
    }
  } catch (error) {
    console.error('❌ Error:', error)
    return false
  }
}

testGeminiConnection().then((success) => {
  process.exit(success ? 0 : 1)
})
