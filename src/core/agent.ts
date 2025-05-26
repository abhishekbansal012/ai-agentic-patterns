export interface Agent {
  run(input: any): Promise<any>;
}
