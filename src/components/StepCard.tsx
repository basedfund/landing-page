import React from 'react';
import { Box, Typography } from '@mui/material';

type StepCardProps = {
  id: string,
  title: string,
  description: string[],
  rotation: number,
  top: string
};

export function StepCard({ id, title, description, rotation, top }: StepCardProps) {
  return (
    <Box>
      <Box
        bgcolor="#393953"
        borderRadius="16px"
        width='392px'
        height='480px'
        sx={{ transform: `rotate(${rotation}deg)` }}
        textAlign='left'
        padding='25px'
        top={top}
        position='relative'
      >
        <Typography variant='h1' fontFamily='Stoke' color='text.primary' marginTop='10px'>
          {id}
        </Typography>
        <Typography variant='h4' color='text.primary' fontStyle='bold' marginTop='40px'>
          {title}
        </Typography>
        <Typography variant='h6' color='text.primary' fontStyle='light' marginTop='20px'>
          {description.map((sentence, id) => (
            <span key={id}>{sentence}<br /><br /></span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
}
