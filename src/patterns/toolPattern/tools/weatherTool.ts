import { Tool } from './base';

export class WeatherTool implements Tool {
  name = "weather";
  description = "Get weather information for a location. Input format: 'city name' (e.g., 'Paris')";
  
  async execute(location: string): Promise<string> {
    try {
      if (!location || location.trim().length === 0) {
        return "Error: Please provide a valid location";
      }

      const cityName = location.trim();
      
      // Simulated weather data - in real implementation, this would call a weather API
      return `Weather in ${cityName}: Sunny, 25°C`;
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      return `Error getting weather information: ${errorMessage}`;
    }
  }
} 