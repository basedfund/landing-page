import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import RightArrow from '../../components/svg/RightArrow';

export function SectionAddVault() {
  return (
    <Box
      boxShadow='0px 4px 20px rgba(0, 0, 0, 0.1)'
      borderRadius='16px'
      marginX='auto'
      marginBottom='80px'
      width='80%'
      style={{ background: 'linear-gradient(325.79deg, #4BAAA1 24.5%, #33766F 117.69%)' }}
    >
      <Typography variant='body2' color='text.primary' paddingTop='20px'>
        Have a project in mind?
      </Typography>
      <Typography variant='h2' color='text.primary'>
        Launching a stablecoin or other pegged asset?
      </Typography>
      <Button variant='contained' endIcon={<RightArrow />} sx={{ color: '#4DB2A8', bgcolor: '#ffffff', textTransform: 'none', marginY: '30px' }}>
        Apply for a Vault
      </Button>
    </Box>
  );
}
