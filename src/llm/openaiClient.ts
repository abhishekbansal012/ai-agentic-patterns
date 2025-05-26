import OpenAI from 'openai';
import { OPENAI_API_KEY } from '../config/env';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export async function queryOpenAI(prompt: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: prompt }],
  });
  return response.choices[0].message?.content || '';
}
