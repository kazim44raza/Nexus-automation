import { createGroq } from '@ai-sdk/groq'
import { createOpenAI } from '@ai-sdk/openai'
import { createAnthropic } from '@ai-sdk/anthropic'
import { createGoogleGenerativeAI } from '@ai-sdk/google'
import type { LanguageModel } from 'ai'

export type AIProviderType = 'groq' | 'openai' | 'claude' | 'gemini'

export function getAIModel(): LanguageModel {
  const provider = (process.env.AI_PROVIDER ?? 'groq') as AIProviderType

  switch (provider) {
    case 'openai': {
      const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY })
      return openai('gpt-4o-mini')
    }
    case 'claude': {
      const anthropic = createAnthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
      return anthropic('claude-haiku-4-5-20251001')
    }
    case 'gemini': {
      const google = createGoogleGenerativeAI({ apiKey: process.env.GOOGLE_AI_API_KEY })
      return google('gemini-1.5-flash')
    }
    case 'groq':
    default: {
      const groq = createGroq({ apiKey: process.env.GROQ_API_KEY })
      return groq(process.env.GROQ_MODEL ?? 'llama-3.3-70b-versatile')
    }
  }
}
