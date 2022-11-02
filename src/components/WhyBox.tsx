import React from 'react';
import { Box, Typography } from '@mui/material';
import TwentyDots from '../assets/TwentyDots.svg';

export function WhyBox(props: { title: string, reason: string, description: string, items: any }) {
  return (
    <Box bgcolor={"#393953"} borderRadius={"40px"} width={'1090px'} height={'513px'} marginX={'20px'}>
      <Typography variant='h6' color='text.primary'>
        {props.title}
      </Typography>
      <Typography variant='h3' color='text.primary'>
        {props.reason}
      </Typography>
      <Typography variant='body1' color='text.primary'>
        {props.description}
      </Typography>
      <img src={TwentyDots} />
    </Box>
  );
}
