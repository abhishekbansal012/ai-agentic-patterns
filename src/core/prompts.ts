export const PLAN_PROMPT = (goal: string) =>
  `Create a step-by-step plan to achieve this goal: "${goal}"`;

export const EXECUTE_PROMPT = (task: string) =>
  `Execute the following task: "${task}"`;

export const REFLECT_PROMPT = (results: string[]) =>
  `Reflect on the following results:\n${results.join('\n')}`;
