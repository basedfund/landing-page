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
          <Typography className={styles.description} variant='body1'>
            We use the cookies on the website to improve your experience, analyze traffic, and for basic functionality. Cookies are anonymous and do not link to user data. You can still use the website without cookies. For more information, please read our
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={7}>
          <Grid container direction='row'>
            <Grid item xs={4}>
              <Typography className={styles.groupName} variant='h5'>Legal</Typography>
              <Typography className={styles.link} variant='body1'>Privecy Policy</Typography>
              <Typography className={styles.link} variant='body1'>Terms & Conditions</Typography>
              <Typography className={styles.link} variant='body1'>Contact</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={styles.groupName} variant='h5'>Data</Typography>
              <Typography className={styles.link} variant='body1'>Defi llama</Typography>
              <Typography className={styles.link} variant='body1'>Github</Typography>
              <Typography className={styles.link} variant='body1'>Invest in Bedrock</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={styles.groupName} variant='h5'>Community</Typography>
              <Box>
                <img className={styles.socialIcon} src={SvgInstagram} />
                <img className={styles.socialIcon} src={SvgTwitch} />
                <img className={styles.socialIcon} src={SvgTwitter} />
              </Box>
              <Typography className={styles.link} variant='body1'>Blog</Typography>
              <Typography className={styles.link} variant='body1'>FAQ's</Typography>
              <Typography className={styles.link} variant='body1'>Knowledge Center</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box className={styles.bottomFooter}>
        <Typography className={styles.copyRight} variant='subtitle1'>
          Copyright © 2023 based inc
        </Typography>
        <Typography className={styles.manageSettings} variant='subtitle1'>
          Manage settings
        </Typography>
      </Box>
    </Box>
  );
}
