/** @format */

import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

export interface IWeatherInfoMainProps {
  icon: string;
  deg: number;
  desc: string;
  tempMax: number;
  tempMin: number;
  wind: number;
  humidity: number;
  pressure: number;
  dew_point: number;
}

const useStyles = makeStyles({
  weatherInfo: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-h2': {
      color: '#fff',
      fontSize: '6rem !important',
      lineHeight: '6.2rem',
    },
  },

  weatherInfoMain: {
    display: 'flex',
    alignItems: 'center',
  },

  weatherInfoIcon: {
    width: '76px',
    height: '76px',
  },

  weatherInfoDesc: {
    display: 'flex',
    alignItems: 'center',
  },

  weatherTemMain: {
    position: 'relative',
    '& .MuiTypography-body1': {
      position: 'absolute',
      top: '0px',
      right: '-18px',
      color: '#fff',
      fontSize: '3rem !important',
      lineHeight: '3.2rem',
    },

    '& .MuiTypography-body2': {
      position: 'absolute',
      top: '8px',
      right: '-44px',
      color: '#fff',
      fontSize: '3.6rem !important',
      lineHeight: '3.8rem',
    },
  },

  weatherDescMain: {
    paddingLeft: '80px',
    '& .MuiTypography-h5': {
      color: '#fff',
      fontSize: '2rem !important',
      lineHeight: '2.2rem',
      paddingBottom: '6px',
    },
  },

  weatherInfoDescTempMaxMin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-h6': {
      color: '#cbcfd7',
      fontSize: '1.6rem !important',
      lineHeight: '1.8',
      fontWeight: '400',
      textTransform: 'upperCase',
    },
  },

  weatherInfoParameter: {
    display: 'flex',
    alignItem: 'center',
    marginTop: '12px',
  },

  weatherInfoParameterDesc: {
    minWidth: '100px',
    '& .MuiTypography-h5': {
      color: '#bcc2ca',
      fontSize: '1.6rem !important',
      textTransform: 'uppercase',
    },

    '& .MuiTypography-body1': {
      color: '#fff',
      fontSize: '1.6rem !important',
    },
  },
});

export default function WeatherInfoMain({
  icon,
  deg,
  desc,
  tempMax,
  tempMin,
  wind,
  humidity,
  pressure,
  dew_point,
}: IWeatherInfoMainProps) {
  const classes = useStyles();

  return (
    <Box
      className={classes.weatherInfo}
      sx={{
        py: 1,
        justifyContent: { xs: 'center', md: 'center' },
        flexDirection: { xs: 'column', md: 'column' },
        paddingRight: { xs: '56px', md: '0' },
      }}
    >
      <Box
        sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'unset' } }}
      >
        <Box className={classes.weatherInfoMain}>
          <img
            className={classes.weatherInfoIcon}
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon-weather"
          />
          <Box className={classes.weatherTemMain}>
            <Typography variant="h2">{Math.round(deg)}</Typography>
            <Typography variant="body1">o</Typography>
            <Typography variant="body2">C</Typography>
          </Box>
        </Box>
        <Box className={classes.weatherInfoDesc}>
          <Box className={classes.weatherDescMain}>
            <Typography variant="h5">
              {desc.slice(0, 1).toUpperCase().concat(desc.slice(1))}
            </Typography>
            <Box className={classes.weatherInfoDescTempMaxMin}>
              <Typography variant="h6">{`H: ${Math.round(tempMax)}°`}</Typography>
              <Typography variant="h6" sx={{ pl: '10px' }}>{`L: ${Math.round(
                tempMin
              )}°`}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.weatherInfoParameter} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Box className={classes.weatherInfoParameterDesc}>
          <Typography variant="h5">Gió</Typography>
          <Typography variant="body1">
            {`${Math.round(wind)}km/giờ`}
            <svg
              width="14"
              height="14"
              viewBox="0 0 10 14"
              style={{ transform: 'rotate(-160deg)' }}
            >
              <path d="M5 0L9.66895 14L5 9.33105L0.331055 14L5 0Z" fill="white"></path>
            </svg>
          </Typography>
        </Box>

        <Box className={classes.weatherInfoParameterDesc}>
          <Typography variant="h5">Độ ẩm</Typography>
          <Typography variant="body1">{`${humidity}%`}</Typography>
        </Box>

        <Box className={classes.weatherInfoParameterDesc}>
          <Typography variant="h5">Áp suất</Typography>
          <Typography variant="body1">{`${pressure} mb`}</Typography>
        </Box>

        <Box className={classes.weatherInfoParameterDesc}>
          <Typography variant="h5">Điểm sương</Typography>
          <Typography variant="body1">{`${Math.round(dew_point)}°`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
