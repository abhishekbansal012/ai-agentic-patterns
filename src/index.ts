import { runTask } from './workflows/taskRunner';

async function main() {
  console.log('🚀 Starting Agentic AI workflow...');
  const goal = 'Generate a typescript code for implementing merge sort algorithm.';
  await runTask(goal);
}

main().catch(console.error);
