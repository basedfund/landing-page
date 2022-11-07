import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SvgCurve4 from '../../assets/images/curve4.svg';
import styles from './Footer.module.css';

export function SectionCommunity() {
  return (
    <Box className={styles.communityContainer}>
      <Typography className={styles.title} variant='h4' color='text.primary'>
        Community
      </Typography>
      <Box className={styles.stayText}>
        <Typography variant='h2' color='text.primary'>
          Stay updated
        </Typography>
        <img className={styles.headerCurve} src={SvgCurve4} />
      </Box>
      <Typography className={styles.guide} variant='subtitle2'>
        Connect with us to get all the updated on the email which you will put.
      </Typography>

      <Box className={styles.inputField}>
        <Typography className={styles.alterText} variant='body2'>
          Enter your email address
        </Typography>
        <Button className={styles.submitButton} variant='contained'>
          Submit
        </Button>
      </Box>
      <Typography className={styles.joinSentence} variant='body1'>
        Join others in learning how to protect your cyrpto assets
      </Typography>
    </Box>
  );
}
