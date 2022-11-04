import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import SvgDAI from '../../assets/images/DAI.svg';

export function SectionProtectDai() {
  return (
    <Box bgcolor={'#3D4559'} borderRadius={'40px'} marginX={'80px'} height={'550px'} position='relative'>
      <Box borderRadius='50%' bgcolor='#F5AC37' width='120px' height='120px' display='flex' justifyContent='center' alignItems='center' margin='15px' position='absolute' left='50px' top='-70px'>
        <img src={SvgDAI} width='70%' height='70%' />
      </Box>
      <Grid container width='100%' height='100%'>
        <Grid item xs={5}>
          <Box textAlign='left' paddingLeft='15%' height='100%' display='flex' alignItems='center'>
            <Box flexDirection='column' display='flex' marginTop='-100px'>
              <Typography variant='subtitle1' color='text.primary'>Protect your Dai</Typography>
              <Typography variant='h2' color='text.primary' marginY='20px'>Protect your stable coins</Typography>
              <Typography variant='body1' color='text.primary'>Deposit Dai and protect yourself from depeg risks</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Box bgcolor='#16213E' width='90%' height='55%' marginTop='12%' borderRadius='25px' display='flex' alignItems='center' justifyContent='center' textAlign='left'>
            <Box width='80%' marginX='auto' position='relative'>
              <Box flexDirection='row' display='flex' width='100%' marginBottom='20px'>
                <Typography variant='h5' color='text.primary' fontFamily='Manrope'>Current Capacity Available</Typography>
                <Typography variant='h5' color='text.primary' fontFamily='Manrope' right='0' position='absolute'>19.35M</Typography>
              </Box>
              <Box flexDirection='row' display='flex' width='100%' marginBottom='20px'>
                <Typography variant='h5' color='text.primary' fontFamily='Manrope'>Deposit Fee</Typography>
                <Typography variant='h5' color='text.primary' fontFamily='Manrope' right='0' position='absolute'>0.25%</Typography>
              </Box>
              <Box bgcolor='#ffffff' width='100%' marginTop='70px' borderRadius='15px' paddingY='15px' display='flex' position='relative'>
                <Typography variant='body2' fontFamily='Inter' color='#606274' marginLeft='35px'>
                  Protect your DAI &nbsp; 0.00
                </Typography>
                <Button variant='contained' sx={{ width: '40%', fontSize: '14px', right: '7px', bottom: '9px', position: 'absolute', bgcolor: '#1E266D' }}>
                  PROTECT
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
