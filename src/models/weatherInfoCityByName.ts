export interface CloudsCity {
  all: string;
}

export interface CoordCity {
  lon: number;
  lat: number;
}

export interface MainCity {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface SysCity {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface WeatherCityByName {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WindCity {
  deg: number;
  gust: number;
  speed: number;
}

export interface WeatherInfoCityByName {
  base: string;
  clouds: CloudsCity;
  cod: number;
  coord: CoordCity;
  dt: number;
  id: number;
  main: MainCity;
  name: string;
  sys: SysCity;
  timezone: number;
  visibility: number;
  weather: WeatherCityByName[];
  wind: WindCity;
}
