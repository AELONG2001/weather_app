/** @format */

export interface ListParamsCurrentWeather {
  lat: number;
  lon: number;
  units: string;
  appid?: string | number;
  lang: string;
}

export interface ListParamsCityList {
  id: number;
  units: string;
  appid?: string | number;
  lang: string;
}
