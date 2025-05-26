import { Agent } from '../core/agent';
import { config } from 'dotenv';
import { OpenAI } from 'openai';

config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export class ExecutorAgent implements Agent {
  async run(task: string): Promise<string> {
    console.log("🛠️ ExecutorAgent: Executing task...");
    
    const systemPrompt = `You are an AI execution agent. Your task is to execute tasks and provide detailed results.
Requirements:
1. Execute the task step by step
2. Provide detailed results or findings
3. Include relevant data or information
4. If the task requires external data, simulate realistic data
5. Format the response in a clear, structured way`;

    const userPrompt = `Task: ${task}

Provide a comprehensive execution result.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
    });

    return response.choices[0].message.content || "Task execution failed.";
  }
}
