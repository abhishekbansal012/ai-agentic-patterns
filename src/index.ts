import { runTask } from './workflows/taskRunner';

async function main() {
  console.log('🚀 Starting Agentic AI workflow...');
  const goal = 'User feedback: The movie recommendations were spot on, but the book suggestions were not relevant to my interests.';
  await runTask(goal);
}

main().catch(console.error);
