/** @format */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosCurrentWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  headers: {
    'Content-Type': 'application/json',
  },
});

//Add request interceptor
axiosCurrentWeather.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

//Add a response interceptor
axiosCurrentWeather.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },

  function (error) {
    return Promise.reject(error);
  }
);

export default axiosCurrentWeather;
