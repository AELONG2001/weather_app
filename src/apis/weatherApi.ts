/** @format */

import {
  ListParamsCityList,
  ListParamsCurrentWeather,
  WeatherInfoCity,
  weatherInfoCurrentTotal,
} from 'models';
import { WeatherInfoCityByName } from 'models/weatherInfoCityByName';
import axiosCurrentWeather from './axiosCurrentWeather';

const weatherApi = {
  getCurrentWeather(
    type: string,
    params: ListParamsCurrentWeather
  ): Promise<weatherInfoCurrentTotal | WeatherInfoCityByName> {
    return axiosCurrentWeather.get(type, { params });
  },

  getWeatherByCity(type: string, params: ListParamsCityList): Promise<WeatherInfoCity> {
    return axiosCurrentWeather.get(type, { params });
  },
};

export default weatherApi;
