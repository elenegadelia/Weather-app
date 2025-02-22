import { ref } from 'vue';
import { defineStore } from 'pinia';
import { fetchWeatherForecast } from '../services/weather-rest-service';
import type { WeatherForecast } from '../types/weather-types';

const WeatherCodeMap: Record<number, { description: string; icon: string }> = {
  0: { description: 'Clear Sky', icon: 'sun-cloud-angled-rain.svg' },
  1: { description: 'Mainly Clear', icon: 'sun-cloud-mid-rain.svg' },
  2: { description: 'Partly Cloudy', icon: 'sun-cloud-mid-rain.svg' },
  3: { description: 'Overcast', icon: 'moon-cloud-fast-wind.svg' },
  45: { description: 'Foggy', icon: 'moon-cloud-fast-wind.svg' },
  48: { description: 'Rime Fog', icon: 'moon-cloud-fast-wind.svg' },
  51: { description: 'Light Drizzle', icon: 'moon-cloud-mid-rain.svg' },
  53: { description: 'Moderate Drizzle', icon: 'moon-cloud-mid-rain.svg' },
  55: { description: 'Dense Drizzle', icon: 'moon-cloud-mid-rain.svg' },
  61: { description: 'Slight Rain', icon: 'moon-cloud-mid-rain.svg' },
  63: { description: 'Moderate Rain', icon: 'moon-cloud-mid-rain.svg' },
  65: { description: 'Heavy Rain', icon: 'moon-cloud-mid-rain.svg' },
  71: { description: 'Slight Snow', icon: 'moon-cloud-mid-rain.svg' },
  73: { description: 'Moderate Snow', icon: 'moon-cloud-mid-rain.svg' },
  75: { description: 'Heavy Snow', icon: 'moon-cloud-mid-rain.svg' },
  77: { description: 'Snow Grains', icon: 'moon-cloud-mid-rain.svg' },
  80: { description: 'Slight Rain Showers', icon: 'moon-cloud-mid-rain.svg' },
  81: { description: 'Moderate Rain Showers', icon: 'moon-cloud-mid-rain.svg' },
  82: { description: 'Violent Rain Showers', icon: 'moon-cloud-mid-rain.svg' },
  95: { description: 'Thunderstorm', icon: 'tornado.svg' },
  96: { description: 'Thunderstorm with Hail', icon: 'tornado.svg' },
  99: { description: 'Thunderstorm with Heavy Hail', icon: 'tornado.svg' }
};

export const useWeatherStore = defineStore('weather', () => {
  const forecasts = ref<WeatherForecast[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const getWeekDay = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const getWeatherDescription = (code: number): string => {
    return WeatherCodeMap[code]?.description || 'Unknown';
  };

  const getWeatherIcon = (code: number): string => {
    return WeatherCodeMap[code]?.icon || 'sun-cloud-mid-rain.svg';
  };

  const fetchForecasts = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetchWeatherForecast();
      
      forecasts.value = response.daily.time.map((time, index) => ({
        date: time,
        temperature: Math.round((response.daily.temperature_2m_max[index] + response.daily.temperature_2m_min[index]) / 2),
        maxTemp: Math.round(response.daily.temperature_2m_max[index]),
        minTemp: Math.round(response.daily.temperature_2m_min[index]),
        weatherCode: response.daily.weathercode[index],
        weekDay: getWeekDay(time)
      }));
    } catch (e) {
      error.value = 'Failed to fetch weather data';
      console.error(e);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    forecasts,
    isLoading,
    error,
    fetchForecasts,
    getWeatherDescription,
    getWeatherIcon
  };
});