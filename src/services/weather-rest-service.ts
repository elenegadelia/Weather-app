import type { WeatherResponse } from '../types/weather-types.ts';

const TBILISI_COORDINATES = {
  latitude: 41.7151,
  longitude: 44.8271
};

export async function fetchWeatherForecast(): Promise<WeatherResponse> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${TBILISI_COORDINATES.latitude}&longitude=${TBILISI_COORDINATES.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;
  
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}