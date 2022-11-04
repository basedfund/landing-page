import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SvgCurve4 from '../../assets/images/curve4.svg';

export function SectionCommunity() {
  return (
    <Box position='relative' width='fit-content' marginX='auto'>
      <Typography variant='h4' color='text.primary' sx={{ opacity: '50%', paddingTop: '75px' }}>
        Community
      </Typography>
      <Box position='relative' width='fit-content' marginX='auto' marginY='30px'>
        <Typography variant='h2' color='text.primary'>
          Stay updated
        </Typography>
        <img src={SvgCurve4} style={{ position: 'absolute', left: '0', bottom: '-10px' }} />
      </Box>
      <Typography variant='h6' color='#D3D5DA'>
        Connect with us to get all the updated on the email which you will put.
      </Typography>

      <Box bgcolor='#ffffff' width='100%' marginTop='20px' borderRadius='10px' paddingY='18px' display='flex' position='relative'>
        <Typography variant='body2' color='#606274' marginLeft='20px'>
          Enter your email address
        </Typography>
        <Button variant='contained' sx={{ width: '30%', fontSize: '16px', right: '10px', bottom: '10px', position: 'absolute', bgcolor: '#1E266D', textTransform: 'none' }}>
          Submit
        </Button>
      </Box>
      <Typography variant='h6' color='#FCFCFC' paddingY='20px'>
        Join others in learning how to protect your cyrpto assets
      </Typography>
    </Box>
  );
}
