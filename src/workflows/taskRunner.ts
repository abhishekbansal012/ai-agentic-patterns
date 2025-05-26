import { CoordinatorAgent } from '../agents/coordinatorAgent';

/**
 * The CoordinatorAgent serves as the central orchestrator of the workflow, 
 * 
 * The CoordinatorAgent is responsible for:
 * - Receiving the user's goal
 * - Planning the tasks to achieve the goal
 * - Executing the tasks
 * - Reflecting on the results
 * - Adjusting the plan based on the results
 * - Returning the final results to the user
 */

export async function runTask(goal: string) {
  const coordinator = new CoordinatorAgent();
  await coordinator.run(goal);
}
