import React from 'react';
import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/material';
import TwentyDots from '../../assets/images/TwentyDots.svg';
import styles from './WhyBox.module.css';

type WhyBoxProps = {
  title: string,
  reason: string,
  description: string,
  titleColor: string,
  rightBgColor: string,
  items: any[]
};

export function WhyBox({ title, reason, description, titleColor, rightBgColor, items }: WhyBoxProps) {
  return (
    <Box bgcolor='#393953' className={styles.root}>
      <Grid container height='100%' flexDirection='row' marginX='auto' sx={{ width: { xs: '95%', md: '85%' }, paddingY: { xs: '5%', md: '0%' } }}>
        <Grid item xs={12} md={5}>
          <Box textAlign='left' height='100%' display='flex' alignItems='center'>
            <Box flexDirection='column' display='flex'>
              <Typography variant='h6' color={titleColor}>
                {title}
              </Typography>
              <Typography variant='h3' color='text.primary' marginTop='15px' marginBottom='30px'>
                {reason}
              </Typography>
              <Typography variant='body1' color='text.primary' sx={{ opacity: 0.8 }}>
                {description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box height='100%' display='flex' alignItems='center' justifyContent='center'>
            <Box bgcolor={rightBgColor} sx={{ width: '90%', height: { xs: '95%', md: '70%' } }} position='relative' borderRadius='29px 0 29px 0'>
              <img src={TwentyDots} className={styles.dot1} />
              <img src={TwentyDots} className={styles.dot2} />
              <Box sx={{ width: { xs: '85%', md: '70%' } }} height='100%' display='flex' alignItems='center' marginX='auto'>
                <Box flexDirection='column' display='flex' marginX='auto' width='100%'>
                  {items.map((item, id) => (
                    <Box key={id}>{item}</Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
