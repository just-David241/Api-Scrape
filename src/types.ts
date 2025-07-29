export interface WeatherParams {
  latitude: number;
  longitude: number;
  hourly?: string[];
  daily?: string[];
  timezone?: string;
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units?: Record<string, string>;
  hourly?: Record<string, any>;
  daily_units?: Record<string, string>;
  daily?: Record<string, any>;
}
