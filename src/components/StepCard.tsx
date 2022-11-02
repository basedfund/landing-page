import React from 'react';
import { Box, Typography } from '@mui/material';

export function StepCard(props: { id: string, title: string, description: string[], rotation: number }) {
  return (
    <Box
      bgcolor={"#393953"}
      borderRadius={"16px"}
      width={'392px'}
      height={'480px'}
      sx={{ transform: `rotate(${props.rotation}deg)` }}
      textAlign='left'
      padding='25px'
    >
      <Typography variant='h1' color='text.primary'>
        {props.id}
      </Typography>
      <Typography variant='h4' color='text.primary' fontStyle='bold'>
        {props.title}
      </Typography>
      <Typography variant='h6' color='text.primary' fontStyle='large'>
        {props.description.map(sentence => (
          <span>{sentence}<br /><br /></span>
        ))}
      </Typography>
    </Box>
  );
}
