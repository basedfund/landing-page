import React from 'react';
import { Box, Typography } from '@mui/material';

export type StepCardProps = {
  id: string,
  title: string,
  description: string[],
  rotation: number,
  top: string
};

export function StepCard({ id, title, description, rotation, top }: StepCardProps) {
  return (
    <Box
      bgcolor="#393953"
      borderRadius="16px"
      sx={{
        transform: { xs: '0', lg: `rotate(${rotation}deg)` },
        width: { xs: '80%', lg: '392px' },
        height: { xs: 'auto', lg: '480px' },
        top: { xs: '5px', lg: { top } }
      }}
      textAlign='left'
      padding='25px'
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
  );
}
