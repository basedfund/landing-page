import React from 'react';
import { Box, Typography } from '@mui/material';

type PlatformInfoBoxProps = {
  value: string,
  suffix: string
};

export function PlatformInfoBox({ value, suffix }: PlatformInfoBoxProps) {
  return (
    <Box sx={{marginX: {xs: '10px', sm: '50px'}, marginBottom: '20px'}}>
      <Typography variant='h5' color='text.primary'>
        {value}
      </Typography>
      <Typography variant='body2' color='secondary' paddingTop='6px'>
        {suffix}
      </Typography>
    </Box>
  );
}
