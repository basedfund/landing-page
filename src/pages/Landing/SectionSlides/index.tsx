import React from 'react';
import { Box, Stack } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Slide1WhyBedRock } from './Slide1WhyBedRock';
import { Slide2TheProblem } from './Slide2TheProblem';
import { Slide3HowDifferent } from './Slide3HowDifferent';
import { Slide4HowItWorks } from './Slide4HowItWorks';

export function SectionSlides() {
  return (
    <ScrollContainer>
      <Box maxWidth='100%' sx={{paddingX: {xs: '0px', md: '50px'}}}>
        <Stack direction='row'>
          <Slide1WhyBedRock />
          <Slide2TheProblem />
          <Slide3HowDifferent />
          <Slide4HowItWorks />
        </Stack>
      </Box>
    </ScrollContainer>
  );
}
