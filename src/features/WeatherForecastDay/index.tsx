import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface IWeatherForecastTimeProps {
  dayArr: any;
}

const useStyles = makeStyles({
  weatherBox2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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

export default function WeatherForecastDay({ dayArr }: IWeatherForecastTimeProps) {
  const classes = useStyles();

  const displayDay = (dt: number) => {
    const date = new Date(dt * 1000);
    let day = date.getDay();
    switch (day) {
      case 0:
        return 'Thứ 2';

      case 1:
        return 'Thứ 3';

      case 2:
        return 'Thứ 4';

      case 3:
        return 'Thứ 5';

      case 4:
        return 'Thứ 6';

      case 5:
        return 'Thứ 7';

      case 6:
        return 'Chủ Nhật';

      default:
        return '';
    }
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
        {dayArr.map((day: any, idx: any) => (
          <SwiperSlide key={idx}>
            <Box className={classes.weatherBox2}>
              <Typography variant="h6">{displayDay(day.dt)}</Typography>

              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="icon-weather"
                style={{ width: '50px', height: '50px' }}
              />

              <Typography variant="h4">{`${Math.round(day.temp.day)}°`}</Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
