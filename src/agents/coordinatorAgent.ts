import { PlannerAgent } from './plannerAgent';
import { ExecutorAgent } from './executorAgent';
import { ReflectionAgent } from '../patterns/reflection/reflectionAgent';
import { ToolPatternAgent } from '../patterns/toolPattern/toolPatternAgent';
import { MultiAgent } from '../patterns/multiAgent/multiAgent';
import { PlanningPatternAgent } from '../patterns/planningPattern/planningPatternAgent';

export class CoordinatorAgent {
  
  planner = new PlannerAgent();
  executor = new ExecutorAgent();
  
  reflection = new ReflectionAgent();
  toolPattern = new ToolPatternAgent();
  multiAgent = new MultiAgent();
  planningPattern = new PlanningPatternAgent();

  async run(goal: string) {
    console.log("\n🎯 Initial Goal:", goal);
    
    const plan = await this.planner.run(goal);
    console.log("\n📋 Generated Plan:", plan);
    
    const results = [];
    for (const task of plan) {
      const result = await this.executor.run(task);
      results.push(result);
      console.log("\n✅ Task Execution Result:", result);
    }
    
    const reflectionResult = await this.reflection.run(results.join(', '));
    console.log("\n🤔 Reflection Result:", reflectionResult);
    
    const toolPatternResult = await this.toolPattern.run(reflectionResult);
    const multiAgentResult = await this.multiAgent.run(toolPatternResult);
    const planningPatternResult = await this.planningPattern.run(multiAgentResult);
    await this.reflection.run(planningPatternResult);
  }
}
