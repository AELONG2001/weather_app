import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface IWeatherForecastTimeProps {
  hourlyArr: any;
}

const useStyles = makeStyles({
  weatherBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    userSelect: 'none',
    '& .MuiTypography-h6': {
      color: '#fff',
      fontSize: '1.8rem',
      lineHeight: '2rem',
    },

    '& .MuiTypography-h4': {
      color: '#fff',
      fontSize: '2rem',
      lineHeight: '2.2rem',
    },
  },
});

export default function WeatherForecastTime({ hourlyArr }: IWeatherForecastTimeProps) {
  const classes = useStyles();

  const displayTime = (dt: number) => {
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    return hours + ':00';
  };

  return (
    <Box sx={{ py: 6 }}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={8}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },

          740: {
            slidesPerView: 4,
          },
          960: {
            slidesPerView: 8,
          },
        }}
      >
        {hourlyArr.map((hour: any, idx: any) => (
          <SwiperSlide key={idx}>
            <Box className={classes.weatherBox}>
              <Typography variant="h6">{displayTime(hour.dt)}</Typography>

              <img
                src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                alt="icon-weather"
                style={{ width: '50px', height: '50px' }}
              />

              <Typography variant="h4">{`${Math.round(hour.temp)}°`}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
