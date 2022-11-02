import React from 'react';
import { Box, Typography } from '@mui/material';

export function PlatformInfoBox(props: { value: string, suffix: string }) {
  return (
    <Box marginX={'50px'}>
      <Typography variant='h5' color='text.primary'>
        {props.value}
      </Typography>
      <Typography variant='body2' color='secondary'>
        {props.suffix}
      </Typography>
    </Box>
  );
}
