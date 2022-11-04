import React from 'react';
import { Box } from '@mui/material';
import { SectionTop } from './SectionTop/SectionTop';
import { SectionSlides } from './SectionSlides';
import { SectionLearn } from './SectionLearn';
import { SectionAddVault } from './SectionAddVault';
import { SectionFAQ } from './SectionFAQ';
import { SectionProtectDai } from './SectionProtectDai';
import { SectionGetProtect } from './SectionGetProtect';
import { SectionSteps } from './SectionSteps';

export function Landing() {
  return (
    <Box>
      <Box>
        <SectionTop />
        <SectionSlides />
        <SectionSteps />
      </Box>

      <SectionGetProtect />
      <SectionProtectDai />
      <SectionFAQ />
      <SectionAddVault />
      <SectionLearn />
    </Box>
  );
}
