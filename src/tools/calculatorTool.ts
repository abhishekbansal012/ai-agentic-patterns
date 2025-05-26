import { Tool } from './toolInterface';

export class CalculatorTool implements Tool {
  async use(expression: string): Promise<string> {
    console.log(`🧮 Calculating expression: ${expression}`);
    try {
      // Eval is unsafe for real apps; demo only
      // eslint-disable-next-line no-eval
      const result = eval(expression);
      return `Result: ${result}`;
    } catch {
      return 'Invalid expression';
    }
  }
}
