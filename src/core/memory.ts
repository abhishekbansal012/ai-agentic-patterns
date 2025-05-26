export class Memory {
  private storage: Record<string, any> = {};

  save(key: string, value: any) {
    this.storage[key] = value;
  }

  recall(key: string): any {
    return this.storage[key];
  }
}
