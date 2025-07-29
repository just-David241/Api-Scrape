import { getWeatherForestcast } from '../src/client';
async function main() {
  const forestcast = await getWeatherForestcast({
    latitude: 48.8566,
    longitude: 2.3522,
    hourly: ['temperature_2m', 'precipitation'],
    daily: ['temperature_2m_max', 'temperature_2m_min'],
    timezone: 'Africa/Gabon',
  });

  console.log(JSON.stringify(forestcast, null, 2));
}
main();
