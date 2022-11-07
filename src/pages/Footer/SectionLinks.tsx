import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import BedRockLogo from '../../assets/images/BedRockLogo.svg';
import SvgInstagram from '../../assets/images/Instagram.svg';
import SvgTwitter from '../../assets/images/Twitter.svg';
import SvgTwitch from '../../assets/images/Twitch.svg';
import styles from './Footer.module.css';

export function SectionLinks() {
  return (
    <Box className={styles.linkPanel}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={5}>
          <img src={BedRockLogo} />
          <Typography variant='subtitle1' color='#ECECEC' paddingY='20px'>
            We use the cookies on the website to improve your experience, analyze traffic, and for basic functionality. Cookies are anonymous and do not link to user data. You can still use the website without cookies. For more information, please read our
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Grid container direction='row'>
            <Grid item xs={4} height='100%'>
              <Typography variant='h5' paddingBottom='20px'>Legal</Typography>
              <Typography variant='subtitle1' color='#DFE0EB'>Privecy Policy</Typography>
              <Typography variant='subtitle1' color='#DFE0EB'>Terms & Conditions</Typography>
              <Typography variant='subtitle1' color='#DFE0EB'>Contact</Typography>
            </Grid>
            <Grid item xs={4} height='100%'>
              <Typography variant='h5' paddingBottom='20px'>Data</Typography>
              <Typography variant='subtitle1' color='#DFE0EB'>Defi llama</Typography>
              <Typography variant='subtitle1' color='#DFE0EB'>Github</Typography>
              <Typography variant='subtitle1' color='#DFE0EB'>Invest in Bedrock</Typography>
            </Grid>
            <Grid item xs={4} height='100%'>
              <Typography variant='h5' paddingBottom='20px'>Community</Typography>
              <Box>
                <img src={SvgInstagram} style={{ marginRight: '20px' }} />
                <img src={SvgTwitch} style={{ marginRight: '20px' }} />
                <img src={SvgTwitter} style={{ marginRight: '20px' }} />
              </Box>
              <Typography variant='subtitle1' color='#DFE0EB'>Blog</Typography>
              <Typography variant='subtitle1' color='#DFE0EB'>FAQ's</Typography>
              <Typography variant='subtitle1' color='#DFE0EB'>Knowledge Center</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box marginX='auto' position='relative' sx={{paddingY: {xs: '50px', md: '150px'}}}>
        <Typography variant='subtitle1' color='#A4FBF3' position='absolute' left='0'>
          Copyright © 2023 based inc
        </Typography>
        <Typography variant='subtitle1' color='#DFE0EB' position='absolute' right='0'>
          Manage settings
        </Typography>
      </Box>
    </Box>
  );
}
