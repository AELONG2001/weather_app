export interface WeatherCurrent {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Current {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: WeatherCurrent[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface Feel_Like_Daily {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface TempDaily {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

export interface Daily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: Feel_Like_Daily;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: TempDaily;
  uvi: number;
  visibility: number;
  weather: WeatherCurrent[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface Hourly {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: string;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: WeatherCurrent[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface Minutely {
  dt: number;
  precipitation: number;
}

export interface weatherInfoCurrentTotal {
  current: Current;
  daily: Daily[];
  hourly: Hourly[];
  lat: number;
  lon: number;
  minutely: Minutely[];
  timezone: string;
  timezone_offset: number;
}
