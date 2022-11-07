import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import SvgDAI from '../../../assets/images/DAI.svg';
import SvgSparkle from '../../../assets/images/Sparkle.svg';
import RightArrow from '../../../components/svg/RightArrow';
import styles from './SectionProtect.module.css';

export function SectionProtect() {
  return (
    <Box>
      <Box maxWidth='600px' marginX='auto' sx={{marginY: {xs: '120px', md: '180px'}}}>
        <Box position='relative' width='fit-content' marginX='auto'>
          <Typography variant='h2' color='text.primary' marginY='20px'>
            Get Protection
          </Typography>
          <img src={SvgSparkle} style={{ position: 'absolute', right: '-40px', bottom: '20px' }} />
        </Box>
        <Typography variant='body2' color='secondary.main'>
          Deposit stablecoins and protect against possible depeg events by sharing risks across a basket of depositors.
        </Typography>
        <Button variant='text' sx={{ fontSize: '18px', textTransform: 'none', marginTop: '10px' }} endIcon={<RightArrow />}>View all our vaults</Button>
      </Box>

      <Box className={styles.protectDai}>
        <Box className={styles.daiIcon}>
          <img src={SvgDAI} width='70%' height='70%' />
        </Box>
        <Grid container width='100%' height='100%'>
          <Grid item xs={12} sm={5} md={6} alignItems='center' display='flex'>
            <Box textAlign='left' paddingX='10%' display='flex' alignItems='center' flexDirection='column'>
              <Typography variant='subtitle1' color='text.primary'>Protect your Dai</Typography>
              <Typography variant='h2' color='text.primary' marginY='20px'>Protect your stable coins</Typography>
              <Typography variant='body1' color='text.primary'>Deposit Dai and protect yourself from depeg risks</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} md={6} alignItems='center' display='flex'>
            <Box bgcolor='#16213E' width='80%' marginX='auto' paddingX='5%' paddingY='10%' borderRadius='25px' textAlign='left'>
              <Box flexDirection='row' display='flex' marginBottom='20px' position='relative'>
                <Typography variant='h5' color='text.primary' fontFamily='Manrope'>Current Capacity Available</Typography>
                <Typography variant='h5' color='text.primary' fontFamily='Manrope' right='0' position='absolute'>19.35M</Typography>
              </Box>
              <Box flexDirection='row' display='flex' marginBottom='20px' position='relative'>
                <Typography variant='h5' color='text.primary' fontFamily='Manrope'>Deposit Fee</Typography>
                <Typography variant='h5' color='text.primary' fontFamily='Manrope' right='0' position='absolute'>0.25%</Typography>
              </Box>
              <Box bgcolor='#ffffff' marginTop='70px' borderRadius='15px' paddingY='15px' display='flex' position='relative'>
                <Typography variant='body2' fontFamily='Inter' color='#606274' sx={{marginLeft: {xs: '15px', md: '35px'}}}>
                  Protect your DAI &nbsp; 0.00
                </Typography>
                <Button variant='contained' sx={{ width: '35%', fontSize: '14px', right: '7px', bottom: '9px', position: 'absolute', bgcolor: '#1E266D' }}>
                  PROTECT
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
