import axios from 'axios';
import { weatherParams, weatherResponse } from './types';

const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function getWeatherForestCast(params: weatherParams): Promise<weatherResponse> {
  try {
    const response = await axios.get<weatherResponse>(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error(`Erreur lors de la recuperation des donnée meteo ${error}`);
  }
}
