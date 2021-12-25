/** @format */

import { ListParamsCityList, ListParamsCurrentWeather } from 'models';
import axiosCurrentWeather from './axiosCurrentWeather';

const weatherApi = {
  getCurrentWeather(type: string, params: ListParamsCurrentWeather) {
    return axiosCurrentWeather.get(type, { params });
  },

  getWeatherByCity(type: string, params: ListParamsCityList) {
    return axiosCurrentWeather.get(type, { params });
  },
};

export default weatherApi;
