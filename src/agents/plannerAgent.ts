import { Agent } from '../core/agent';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export class PlannerAgent implements Agent {
  async run(goal: string): Promise<string[]> {
    console.log("🧭 PlannerAgent: Creating plan...");
    
    const systemPrompt = `You are an AI planning agent. Your task is to break down goals into a sequence of specific, actionable tasks.
Requirements:
1. Break down the goal into 3-5 specific tasks
2. Each task should be clear and actionable
3. Tasks should be in logical order
4. Format each task as a separate line starting with a number and dash (e.g., "1- Task description")`;

    const userPrompt = `Goal: ${goal}

Provide only the numbered tasks, one per line.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
    });

    const plan = response.choices[0].message.content || "";
    return plan.split('\n').filter(task => task.trim().length > 0);
  }
}
