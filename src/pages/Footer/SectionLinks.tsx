import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import BedRockLogo from '../../assets/images/BedRockLogo.svg';
import SvgInstagram from '../../assets/images/Instagram.svg';
import SvgTwitter from '../../assets/images/Twitter.svg';
import SvgTwitch from '../../assets/images/Twitch.svg';

export function SectionLinks() {
  return (
    <Grid
      container
      textAlign='left'
      marginX='auto'
      width='85%'
      direction='row'
      justifyContent='center'
      sx={{marginY: '100px'}}
    >
      <Grid item xs={5} paddingRight='60px'>
        <img src={BedRockLogo} />
        <Typography variant='subtitle1' color='#ECECEC' paddingY='20px'>
          We use the cookies on the website to improve your experience, analyze traffic, and for basic functionality. Cookies are anonymous and do not link to user data. You can still use the website without cookies. For more information, please read our
        </Typography>
      </Grid>
      <Grid item xs={1} />
      <Grid item xs={2} paddingX='15px' height='100%'>
        <Typography variant='h5' paddingBottom='20px'>Legal</Typography>
        <Typography variant='subtitle1' color='#DFE0EB'>Privecy Policy</Typography>
        <Typography variant='subtitle1' color='#DFE0EB'>Terms & Conditions</Typography>
        <Typography variant='subtitle1' color='#DFE0EB'>Contact</Typography>
      </Grid>
      <Grid item xs={2} paddingX='15px' height='100%'>
        <Typography variant='h5' paddingBottom='20px'>Data</Typography>
        <Typography variant='subtitle1' color='#DFE0EB'>Defi llama</Typography>
        <Typography variant='subtitle1' color='#DFE0EB'>Github</Typography>
        <Typography variant='subtitle1' color='#DFE0EB'>Invest in Bedrock</Typography>
      </Grid>
      <Grid item xs={2} paddingX='15px' height='100%'>
        <Typography variant='h5' paddingBottom='20px'>Community</Typography>
        <Box>
          <img src={SvgInstagram} style={{marginRight: '20px'}} />
          <img src={SvgTwitch} style={{marginRight: '20px'}} />
          <img src={SvgTwitter} style={{marginRight: '20px'}} />
        </Box>
        <Typography variant='subtitle1' color='#DFE0EB'>Blog</Typography>
        <Typography variant='subtitle1' color='#DFE0EB'>FAQ's</Typography>
        <Typography variant='subtitle1' color='#DFE0EB'>Knowledge Center</Typography>
      </Grid>
    </Grid>
  );
}
