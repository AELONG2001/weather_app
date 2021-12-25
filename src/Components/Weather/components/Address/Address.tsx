/** @format */

import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { WeatherInfoCityByName } from 'models/weatherInfoCityByName';
import React from 'react';

export interface IAddressProps {
  cityName: WeatherInfoCityByName;
}

const useStyles = makeStyles({
  addressHeading: {
    color: '#fff',
    fontSize: '4rem !important',
    lineHeight: '4.2rem',
    fontWeight: '500',
  },
});

export default function Address({ cityName }: IAddressProps) {
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
        <Typography className={classes.addressHeading} variant="h4" align="center">{`${
          cityName.name === 'Tinh Hai Duong' ? 'Hải Dương' : cityName.name
        }`}</Typography>
      </Box>
    </div>
  );
}
