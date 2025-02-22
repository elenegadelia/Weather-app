export interface WeatherData {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  }
  
  export interface WeatherForecast {
    date: string;
    temperature: number;
    maxTemp: number;
    minTemp: number;
    weatherCode: number;
    weekDay: string;
  }
  
  export interface WeatherResponse {
    daily: WeatherData;
  }
  
