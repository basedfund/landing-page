import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import RightArrow from '../../components/svg/RightArrow';
import SvgSparkle from '../../assets/images/Sparkle.svg';

export function SectionGetProtect() {
  return (
    <Box maxWidth={'600px'} marginX={'auto'} marginY={'170px'}>
      <Box position={'relative'} width={'fit-content'} marginX={'auto'}>
        <Typography variant='h2' color='text.primary' marginY={'20px'}>
          Get Protection
        </Typography>
        <img src={SvgSparkle} style={{ position: 'absolute', right: '-40px', bottom: '20px' }} />
      </Box>
      <Typography variant='body2' color='secondary.main'>
        Deposit stablecoins and protect against possible depeg events by sharing risks across a basket of depositors.
      </Typography>
      <Button variant='text' sx={{ fontSize: '18px', textTransform: 'none', marginTop: '10px' }} endIcon={<RightArrow />}>View all our vaults</Button>
    </Box>
  );
}
