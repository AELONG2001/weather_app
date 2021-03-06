import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/material/node_modules/@mui/system';
import { makeStyles } from '@mui/styles';
import clearSkyImg from 'assets/image/clear_sky.jpg';
import fewCloudImg from 'assets/image/few_clouds.jpg';
import scatteredImg from 'assets/image/scattered_clouds.jpg';
import brokenCloudImg from 'assets/image/broken_clouds.png';
import showerRainImg from 'assets/image/shower_rain.jpg';
import rainImg from 'assets/image/rain.jpg';
import thunderstormImg from 'assets/image/thunderstorm.jpg';
import snowImg from 'assets/image/snow.jpg';
import brouillardImg from 'assets/image/brouillard.jpg';
import { WeatherInfoCity, weatherInfoCurrentTotal } from 'models';

export interface IWeatherCityListProps {
  cityName: any;
  cityList: WeatherInfoCity[];
  dataCurrent: weatherInfoCurrentTotal;
}

const useStyles = makeStyles({
  cardMain: {
    display: 'grid',
    gridGap: '10px',
  },
  cardBox: {
    width: '360px',
    marginBottom: '20px',
    backgroundColor: '#74b9ff !important',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    objectFit: 'cover',
  },

  cardBoxFirst: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiTypography-h4': {
      color: '#fff',
      fontSize: '2rem',
      lineHeight: '2.2rem',
    },

    '& .MuiTypography-h5': {
      color: '#fff',
      fontSize: '1.4rem',
      lineHeight: '1.6rem',
      paddingTop: '6px',
    },
  },

  cardBoxSecond: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiTypography-h5': {
      color: '#fff',
      fontSize: '1.6rem',
      lineHeight: '1.8rem',
      paddingTop: '6px',
    },

    '& .MuiTypography-h6': {
      color: '#fff',
      fontSize: '1.4rem',
      lineHeight: '1.6rem',
      fontWeight: '400',
      paddingTop: '6px',
    },
  },

  cardBoxSecondSub: {
    display: 'flex',
    alignItems: 'center',
  },

  cardTemp: {
    position: 'relative',

    '& .MuiTypography-body1': {
      color: '#fff',
      fontSize: '4rem',
      lineHeight: '4.2rem',
    },

    '& .MuiTypography-body2': {
      position: 'absolute',
      top: '0px',
      right: '-10px',
      color: '#fff',
      fontSize: '2rem',
      lineHeight: '2.2rem',
    },
  },
});

export default function WeatherCityList({
  cityList,
  dataCurrent,
  cityName,
}: IWeatherCityListProps) {
  const classes = useStyles();

  const date = new Date();
  let minute = date.getMinutes();
  if (minute <= 10) {
    minute = parseInt('0'.concat(String(minute)));
  }

  const displayTimeSpecial = (dt: number) => {
    const date = new Date(dt * 1000);
    const hour = date.getHours();
    let minute = date.getMinutes();
    if (minute <= 10) {
      minute = parseInt('0'.concat(String(minute)));
    }
    return hour + ':' + minute;
  };

  const iconImg = JSON.parse(localStorage.getItem('iconImg') as string);

  return (
    <Box
      className={classes.cardMain}
      sx={{
        gridTemplateColumns: { xs: '100%', md: '50% 50%' },
        display: { xs: 'none', md: 'grid' },
        paddingLeft: { xs: '0', md: '24px' },
      }}
    >
      <Card
        className={classes.cardBox}
        style={{
          backgroundImage: `url('${
            iconImg === '01d'
              ? clearSkyImg
              : iconImg === '02d' || '02n'
              ? fewCloudImg
              : iconImg === '03d' || '03n'
              ? scatteredImg
              : iconImg === '04d' || '04n'
              ? brokenCloudImg
              : iconImg === '09d' || '09n'
              ? showerRainImg
              : iconImg === '10d' || '10n'
              ? rainImg
              : iconImg === '11d' || '11n'
              ? thunderstormImg
              : iconImg === '13d' || '13n'
              ? snowImg
              : clearSkyImg
          }')`,
        }}
      >
        <CardContent>
          <Box className={classes.cardBoxFirst}>
            <Box>
              <Typography variant="h4" sx={{ fontSize: 14 }}>
                {cityName.name ? 'V??? tr?? c???a b???n' : cityName.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} variant="h5">
                {cityName.name}
              </Typography>
            </Box>
            <Box className={classes.cardTemp}>
              <Typography variant="body1">{Math.round(dataCurrent.current.temp)}</Typography>
              <Typography variant="body2">o</Typography>
            </Box>
          </Box>

          <Box className={classes.cardBoxSecond}>
            <Typography variant="h5">
              {dataCurrent.current.weather[0].description
                .slice(0, 1)
                .toUpperCase()
                .concat(dataCurrent.current.weather[0].description.slice(1))}
            </Typography>
            <Box className={classes.cardBoxSecondSub}>
              <Typography variant="h6">{`H: ${Math.round(
                dataCurrent.daily[0].temp.max
              )}??`}</Typography>
              <Typography variant="h6" sx={{ pl: '10px' }}>{`L: ${Math.round(
                dataCurrent.daily[0].temp.min
              )}??`}</Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {cityList.map((city, idx) => (
        <Card
          key={idx}
          className={classes.cardBox}
          style={{
            backgroundImage: `url('${
              city.weather[0].icon === '01d'
                ? clearSkyImg
                : city.weather[0].icon === '02d'
                ? fewCloudImg
                : city.weather[0].icon === '03d'
                ? scatteredImg
                : city.weather[0].icon === '04d'
                ? brokenCloudImg
                : city.weather[0].icon === '09d'
                ? showerRainImg
                : city.weather[0].icon === '10d'
                ? rainImg
                : city.weather[0].icon === '11d'
                ? thunderstormImg
                : city.weather[0].icon === '13d'
                ? snowImg
                : city.weather[0].icon === '50d'
                ? brouillardImg
                : clearSkyImg
            }')`,
          }}
        >
          <CardContent>
            <Box className={classes.cardBoxFirst}>
              <Box>
                <Typography variant="h4" sx={{ fontSize: 14 }}>
                  {(city.name === 'Hanoi' && 'H?? N???i') ||
                    (city.name === 'New York' && 'New York') ||
                    (city.name === 'Los Angeles' && 'Los Angeles')}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="h5">
                  {displayTimeSpecial(city.dt)}
                </Typography>
              </Box>
              <Box className={classes.cardTemp}>
                <Typography variant="body1">{Math.round(city.main.temp)}</Typography>
                <Typography variant="body2">o</Typography>
              </Box>
            </Box>

            <Box className={classes.cardBoxSecond}>
              <Typography variant="h5">
                {city.weather[0].description
                  .slice(0, 1)
                  .toUpperCase()
                  .concat(city.weather[0].description.slice(1))}
              </Typography>
              <Box className={classes.cardBoxSecondSub}>
                <Typography variant="h6">{`H: ${Math.round(city.main.temp_max)}??`}</Typography>
                <Typography variant="h6" sx={{ pl: '10px' }}>{`L: ${Math.round(
                  city.main.temp_min
                )}??`}</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
