export interface Tool {
  use(input: string): Promise<string>;
}
