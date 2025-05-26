import { Agent } from '../core/agent';

export class PlannerAgent implements Agent {
  async run(input: string): Promise<string[]> {
    console.log("🧭 PlannerAgent: Creating plan...");
    // Dummy plan steps based on input goal
    return [
      `Analyze goal: ${input}`,
      "Create sub-tasks",
      "Prioritize steps"
    ];
  }
}
