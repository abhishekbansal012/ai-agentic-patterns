import { Tool } from './toolInterface';

export class WebSearchTool implements Tool {
  async use(query: string): Promise<string> {
    console.log(`🔍 Searching web for: ${query}`);
    // Simulate search result
    return `Search results for "${query}"`;
  }
}
