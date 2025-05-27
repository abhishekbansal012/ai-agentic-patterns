// Base Tool Interface
export interface Tool {
  name: string;
  description: string;
  execute(input: string): Promise<string>;
}

// Weather Tool Implementation
export class WeatherTool implements Tool {
  name = "weather";
  description = "Get weather information for a location. Input format: 'city name' (e.g., 'Paris')";
  
  async execute(location: string): Promise<string> {
    try {
      if (!location || location.trim().length === 0) {
        return "Error: Please provide a valid location";
      }
      const cityName = location.trim();
      return `Weather in ${cityName}: Sunny, 25°C`;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return `Error getting weather information: ${errorMessage}`;
    }
  }
}

// Currency Converter Tool Implementation
export class CurrencyConverterTool implements Tool {
  name = "currency";
  description = "Convert between currencies. Input format: 'amount from_currency to_currency' (e.g., '100 USD EUR')";
  
  async execute(input: string): Promise<string> {
    try {
      const match = input.match(/(\d+(?:\.\d+)?)\s+([A-Z]{3})\s+([A-Z]{3})/i);
      
      if (!match) {
        return "Error: Invalid input format. Please use format: 'amount from_currency to_currency' (e.g., '100 USD EUR')";
      }

      const [_, amount, fromCurrency, toCurrency] = match;
      const numericAmount = parseFloat(amount);

      if (isNaN(numericAmount)) {
        return "Error: Invalid amount provided";
      }

      const conversionRate = 1.2; // Simulated rate
      const convertedAmount = (numericAmount * conversionRate).toFixed(2);
      
      return `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount} ${toCurrency.toUpperCase()}`;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return `Error in currency conversion: ${errorMessage}`;
    }
  }
}

// Translation Tool Implementation
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

      return `Translation: ${text} (${fromLang} to ${toLang})`;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return `Error in translation: ${errorMessage}`;
    }
  }
} 