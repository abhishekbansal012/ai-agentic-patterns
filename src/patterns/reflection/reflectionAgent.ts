import { Agent } from '../../core/agent';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export class ReflectionAgent implements Agent {
  async run(input: string): Promise<string> {
    console.log("🔁 ReflectionAgent: Reflecting on input...");
    
    const systemPrompt = `You are an AI reflection agent. Your task is to analyze and provide insights on given inputs.
Requirements:
1. Identify key points and themes
2. Suggest potential improvements or alternatives
3. Relate the input to broader goals or objectives
4. Provide constructive criticism
5. Format the response in a clear, structured way`;

    const userPrompt = `Input to reflect upon:
${input}

Provide a detailed reflection based on these considerations.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
    });
    
    return response.choices[0].message.content || "No reflection available.";
  }
} 