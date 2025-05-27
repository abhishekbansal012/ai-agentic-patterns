import { Agent } from '../../core/agent';
import { config } from 'dotenv';
import { OpenAI } from 'openai';
import { Tool, WeatherTool, CurrencyConverterTool, TranslationTool } from './tools';

config();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface ToolExecution {
  toolName: string;
  input: string;
}

export class ToolPatternAgent implements Agent {
  private tools: Tool[];

  constructor() {
    this.tools = [
      new WeatherTool(),
      new CurrencyConverterTool(),
      new TranslationTool()
    ];
  }

  private async analyzeTask(task: string): Promise<ToolExecution[]> {
    const systemPrompt = `You are an AI agent that analyzes tasks and determines which tools to use.
Available tools:
${this.tools.map(tool => `- ${tool.name}: ${tool.description}`).join('\n')}

For each tool you select, you must provide the exact input in the correct format as specified in the tool's description.
Your response must be a valid JSON object in the following format:
{
  "toolExecutions": [
    {
      "toolName": "name of the tool",
      "input": "properly formatted input for the tool"
    }
  ]
}

IMPORTANT: Your response must be ONLY the JSON object, with no additional text or explanation.`;

    const userPrompt = `Task: ${task}

Analyze this task and determine which tools to use. For each tool, provide the exact input in the correct format.
Return ONLY the JSON object as specified, with no additional text.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ]
    });

    try {
      const content = response.choices[0].message.content || "{}";
      // Clean the response to ensure it's valid JSON
      const jsonStr = content.trim().replace(/^```json\n?/, '').replace(/\n?```$/, '');
      const result = JSON.parse(jsonStr);
      return result.toolExecutions || [];
    } catch (error) {
      console.error("Error parsing tool execution plan:", error);
      return [];
    }
  }

  async run(task: string): Promise<string> {
    try {
      console.log("🛠️ ToolPatternAgent: Analyzing task and selecting appropriate tools...");
      
      const toolExecutions = await this.analyzeTask(task);
      
      if (toolExecutions.length === 0) {
        return "No suitable tools found for the given task. Please try rephrasing your request.";
      }

      // Execute the selected tools and combine results
      const results: string[] = [];
      for (const execution of toolExecutions) {
        const tool = this.tools.find(t => t.name === execution.toolName);
        if (tool) {
          try {
            const result = await tool.execute(execution.input);
            results.push(result);
          } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            results.push(`Error executing ${tool.name}: ${errorMessage}`);
          }
        }
      }

      return `Tool Pattern Results:\n${results.join('\n')}`;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return `Error in ToolPatternAgent: ${errorMessage}`;
    }
  }
} 