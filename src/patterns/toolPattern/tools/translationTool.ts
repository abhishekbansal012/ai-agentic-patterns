import { Tool } from './base';

export class TranslationTool implements Tool {
  name = "translate";
  description = "Translate text between languages. Input format: 'text|from_language|to_language' (e.g., 'Hello|en|fr')";
  
  async execute(input: string): Promise<string> {
    try {
      const parts = input.split('|');
      
      if (parts.length !== 3) {
        return "Error: Invalid input format. Please use format: 'text|from_language|to_language' (e.g., 'Hello|en|fr')";
      }

      const [text, fromLang, toLang] = parts.map(part => part.trim());
      
      if (!text || !fromLang || !toLang) {
        return "Error: All fields (text, from_language, to_language) are required";
      }

      // Simulated translation - in real implementation, this would call a translation API
      return `Translation: ${text} (${fromLang} to ${toLang})`;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return `Error in translation: ${errorMessage}`;
    }
  }
} 