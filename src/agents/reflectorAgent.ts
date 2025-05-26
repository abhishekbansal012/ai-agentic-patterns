import { Agent } from '../core/agent';

export class ReflectorAgent implements Agent {
  async run(results: string[]): Promise<void> {
    console.log("🔁 ReflectorAgent: Reflecting on user feedback...");
    results.forEach((feedback, idx) => {
      console.log(`Feedback ${idx + 1}: ${feedback}`);
      const reflection = this.generateReflection(feedback);
      console.log(`Reflection ${idx + 1}: ${reflection}`);
    });
  }

  private generateReflection(feedback: string): string {
    if (feedback.includes("positive")) {
      return `Success: User feedback is positive. Continue with current recommendations.`;
    } else if (feedback.includes("negative")) {
      return `Warning: User feedback is negative. Consider adjusting recommendations.`;
    } else {
      return `Neutral: User feedback is neutral. Monitor for further feedback.`;
    }
  }
}
