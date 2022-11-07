import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { StepCard } from './StepCards';
import SvgArrow2 from '../../../assets/images/arrow2.svg';
import SvgArrow3 from '../../../assets/images/arrow3.svg';
import SvgCurve2 from '../../../assets/images/curve2.svg';
import { STEP_CARD_CONTEXTS } from './context';

export function SectionSteps() {
  return (
    <Box sx={{marginTop: {xs: '125px', md: '250px'}}}>
      <Box position='relative' width='fit-content' marginX='auto'sx={{marginBottom: {xs: '75px', md: '150px'}}}>
        <Typography variant='h2' color='text.primary'>
          How it works
        </Typography>
        <img src={SvgCurve2} style={{ position: 'absolute', right: '-60px', bottom: '-15px' }} />
      </Box>
      <Stack sx={{ display: { xs: 'none', lg: 'flex' } }} direction='row' alignItems='center' justifyContent='center' spacing='22px'>
        <StepCard {...STEP_CARD_CONTEXTS[0]} />
        <Box height='480px' width='1px' position='relative'>
          <img src={SvgArrow2} style={{ position: 'absolute', left: '-75px', top: '-25px', zIndex: '1' }} />
        </Box>
        <StepCard {...STEP_CARD_CONTEXTS[1]} />
        <Box height='480px' width='1px' position='relative'>
          <img src={SvgArrow3} style={{ position: 'absolute', left: '-60px', bottom: '80px', zIndex: '1' }} />
        </Box>
        <StepCard {...STEP_CARD_CONTEXTS[2]} />
      </Stack>

      <Stack sx={{ display: { xs: 'flex', lg: 'none' } }} direction='column' alignItems='center' justifyContent='center' spacing='22px'>
        <StepCard {...STEP_CARD_CONTEXTS[0]} />
        <StepCard {...STEP_CARD_CONTEXTS[1]} />
        <StepCard {...STEP_CARD_CONTEXTS[2]} />
      </Stack>
    </Box>
  );
}
