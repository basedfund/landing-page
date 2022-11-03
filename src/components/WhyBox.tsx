import React from 'react';
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import TwentyDots from '../assets/TwentyDots.svg';

type WhyBoxProps = {
  title: string,
  reason: string,
  description: string,
  items: any
};

export function WhyBox({ title, reason, description, items }: WhyBoxProps) {
  return (
    <Box bgcolor="#393953" borderRadius="40px" width='1090px' height='513px' marginX='20px'>
      <Grid container height='100%' flexDirection='row'>
        <Grid item xs={5}>
          <Box textAlign='left' paddingLeft='15%' height='100%' display='flex' alignItems='center'>
            <Box flexDirection='column' display='flex'>
              <Typography variant='h6' color='text.primary'>
                {title}
              </Typography>
              <Typography variant='h3' color='text.primary' marginTop='15px' marginBottom='30px'>
                {reason}
              </Typography>
              <Typography variant='body1' color='text.primary' sx={{ opacity: '80%' }}>
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box height='100%' display='flex' alignItems='center' justifyContent='center'>
            <Box bgcolor='#171A3166' width='70%' height='70%' position='relative' borderRadius='29px 0 29px 0'>
              <img src={TwentyDots} style={{ left: '-29px', bottom: '-29px', position: 'absolute' }} />
              <img src={TwentyDots} style={{ right: '-29px', top: '-29px', position: 'absolute' }} />
              <Box width='70%' height='100%' display='flex' alignItems='center' marginX='auto'>
                <Box flexDirection='column' display='flex' marginX='auto' width='100%'>
                  <Box bgcolor='#4F4C64' height='70px' marginY='10px' borderRadius='8px'>USDC</Box>
                  <Box bgcolor='#4F4C64' height='70px' marginY='10px' borderRadius='8px'>Maker Dao Dai</Box>
                  <Box bgcolor='#4F4C64' height='70px' marginY='10px' borderRadius='8px'>USDT</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
