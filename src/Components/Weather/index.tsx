/** @format */

import React from 'react';
import moment from 'moment';
// import weatherBackground1 from "assets/image/photo-1522011916481-b7f27c0bf69b.jpg";
import { Box, Grid } from '@mui/material';
import Address from './components/Address/Address';
import WeatherInfoMain from './components/WeatherInfo/WeatherInfoMain';
import WeatherForecastTime from 'features/WeatherForecastTime';
import WeatherForeCastDay from 'features/WeatherForecastDay';
import WeatherCityList from 'features/WeatherCityList';
import { WeatherInfoCity, weatherInfoCurrentTotal } from 'models';
import { WeatherInfoCityByName } from 'models/weatherInfoCityByName';

export interface IWeatherProps {
  myCity: WeatherInfoCityByName;
  weatherData: weatherInfoCurrentTotal;
  dataByCity: WeatherInfoCity[];
}

export default function Weather({ weatherData, dataByCity, myCity }: IWeatherProps) {
  // getWeather by hours
  const weatherListHours = weatherData.hourly;

  //getWeather by days
  const weatherListDays = weatherData.daily;

  console.log(dataByCity);

  return (
    <Box>
      <Grid container maxWidth="lg" sx={{ margin: '0 auto' }}>
        <Grid item xs={12} md={4.5} mt={3}>
          <Address cityName={myCity} />
          <WeatherInfoMain
            icon={weatherData.current.weather[0].icon}
            deg={weatherData.current.temp}
            desc={weatherData.current.weather[0].description}
            tempMax={weatherData.daily[0].temp.max}
            tempMin={weatherData.daily[0].temp.min}
            wind={weatherData.daily[0].wind_speed}
            humidity={weatherData.daily[0].humidity}
            pressure={weatherData.daily[0].pressure}
            dew_point={weatherData.daily[0].dew_point}
          />
        </Grid>

        <Grid item xs={12} md={7.5} mt={3}>
          <WeatherCityList cityList={dataByCity} dataCurrent={weatherData} cityName={myCity} />
        </Grid>

        <Grid item xs={12} md={12}>
          <Box sx={{ mt: { xs: 1, md: 6 } }}>
            <WeatherForecastTime hourlyArr={weatherListHours} />
            <WeatherForeCastDay dayArr={weatherListDays} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
