import { PlannerAgent } from './plannerAgent';
import { ExecutorAgent } from './executorAgent';
import { ReflectorAgent } from './reflectorAgent';
import { ReflectionAgent } from '../patterns/reflection/reflectionAgent';
import { ToolPatternAgent } from '../patterns/toolPattern/toolPatternAgent';
import { MultiAgent } from '../patterns/multiAgent/multiAgent';
import { PlanningPatternAgent } from '../patterns/planningPattern/planningPatternAgent';

export class CoordinatorAgent {
  planner = new PlannerAgent();
  executor = new ExecutorAgent();
  reflector = new ReflectorAgent();
  reflection = new ReflectionAgent();
  toolPattern = new ToolPatternAgent();
  multiAgent = new MultiAgent();
  planningPattern = new PlanningPatternAgent();

  async run(goal: string) {
    const plan = await this.planner.run(goal);
    const results = [];
    for (const task of plan) {
      const result = await this.executor.run(task);
      results.push(result);
    }
    const reflectionResult = await this.reflection.run(results.join(', '));
    const toolPatternResult = await this.toolPattern.run(reflectionResult);
    const multiAgentResult = await this.multiAgent.run(toolPatternResult);
    const planningPatternResult = await this.planningPattern.run(multiAgentResult);
    await this.reflector.run([planningPatternResult]);
  }
}
