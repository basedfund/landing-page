import React from 'react';
import { Box, Typography } from '@mui/material';

export function StepCard(props: {id: string, title: string, description: string}) {
  return (
    <Box bgcolor={"#393953"} borderRadius={"16px"}>
      <Typography variant='h4' color='text.primary'>
        {props.id}
      </Typography>
      <Typography variant='h6' color='text.primary'>
        {props.title}
      </Typography>
      <Typography variant='body1' color='text.primary'>
        {props.description}
      </Typography>
    </Box>
  );
}
