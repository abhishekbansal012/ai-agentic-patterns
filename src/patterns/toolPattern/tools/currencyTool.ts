import { Tool } from './base';

export class CurrencyConverterTool implements Tool {
  name = "currency";
  description = "Convert between currencies. Input format: 'amount from_currency to_currency' (e.g., '100 USD EUR')";
  
  async execute(input: string): Promise<string> {
    try {
      // Extract currency conversion parameters using regex
      const match = input.match(/(\d+(?:\.\d+)?)\s+([A-Z]{3})\s+([A-Z]{3})/i);
      
      if (!match) {
        return "Error: Invalid input format. Please use format: 'amount from_currency to_currency' (e.g., '100 USD EUR')";
      }

      const [_, amount, fromCurrency, toCurrency] = match;
      const numericAmount = parseFloat(amount);

      if (isNaN(numericAmount)) {
        return "Error: Invalid amount provided";
      }

      // Simulated conversion - in real implementation, this would call a currency API
      const conversionRate = 1.2; // Simulated rate
      const convertedAmount = (numericAmount * conversionRate).toFixed(2);
      
      return `${amount} ${fromCurrency.toUpperCase()} = ${convertedAmount} ${toCurrency.toUpperCase()}`;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return `Error in currency conversion: ${errorMessage}`;
    }
  }
} 