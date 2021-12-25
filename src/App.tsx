/** @format */

import weatherApi from 'apis/weatherApi';
import Weather from 'Components/Weather';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

import clearSkyImg from 'assets/image/clear_sky.jpg';
import fewCloudImg from 'assets/image/few_clouds.jpg';
import scatteredImg from 'assets/image/scattered_clouds.jpg';
import brokenCloudImg from 'assets/image/broken_clouds.png';
import showerRainImg from 'assets/image/shower_rain.jpg';
import rainImg from 'assets/image/rain.jpg';
import thunderstormImg from 'assets/image/thunderstorm.jpg';
import snowImg from 'assets/image/snow.jpg';

const useStyles = makeStyles({
  backgroundWeather: {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
  },
});

function App() {
  const classes = useStyles();

  const [lat, setLat] = useState<any>([]);
  const [long, setLong] = useState<any>([]);
  const [data, setData] = useState<any>([]);
  const [cityCurrent, setCityCurrent] = useState<any>([]);
  const [dataByCity, setDataByCity] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      //get data by current
      const result = await weatherApi.getCurrentWeather('/onecall', {
        lat: lat,
        lon: long,
        units: 'metric',
        appid: 'c76bf5715dc31f38fa30eada6a816861',
        lang: 'vi',
      });
      setData(result);

      //get city current
      const myCity = await weatherApi.getCurrentWeather('/weather', {
        lat: lat,
        lon: long,
        units: 'metric',
        appid: 'c76bf5715dc31f38fa30eada6a816861',
        lang: 'vi',
      });
      setCityCurrent(myCity);

      //get data by City
      const dataCityWeatherHaNoi = await weatherApi.getWeatherByCity('/weather', {
        id: 1581129,
        units: 'metric',
        appid: 'c76bf5715dc31f38fa30eada6a816861',
        lang: 'vi',
      });

      const dataCityWeatherNewYork = await weatherApi.getWeatherByCity('/weather', {
        id: 5128581,
        units: 'metric',
        appid: 'c76bf5715dc31f38fa30eada6a816861',
        lang: 'es',
      });

      const dataCityWeatherLosAngles = await weatherApi.getWeatherByCity('/weather', {
        id: 1705545,
        units: 'metric',
        appid: 'c76bf5715dc31f38fa30eada6a816861',
        lang: 'es',
      });

      const listCityData = [];
      listCityData.push(dataCityWeatherHaNoi, dataCityWeatherNewYork, dataCityWeatherLosAngles);
      setDataByCity(listCityData);
    };
    fetchData();
  }, [lat, long]);

  setTimeout(() => {
    const icon = data.current.weather[0].icon;
    localStorage.setItem('iconImg', JSON.stringify(icon));
  }, 100);

  const iconImg = JSON.parse(localStorage.getItem('iconImg') as string);

  return (
    <Box
      className={classes.backgroundWeather}
      style={{
        backgroundImage: `url('${
          iconImg === '01n'
            ? clearSkyImg
            : iconImg === '02n'
            ? fewCloudImg
            : iconImg === '03n'
            ? scatteredImg
            : iconImg === '04n'
            ? brokenCloudImg
            : iconImg === '09n'
            ? showerRainImg
            : iconImg === '10n'
            ? rainImg
            : iconImg === '11n'
            ? thunderstormImg
            : iconImg === '13n'
            ? snowImg
            : clearSkyImg
        }')`,
      }}
    >
      {typeof data.current !== 'undefined' ? (
        <Weather weatherData={data} dataByCity={dataByCity} myCity={cityCurrent} />
      ) : (
        <Box></Box>
      )}
    </Box>
  );
}

export default App;
