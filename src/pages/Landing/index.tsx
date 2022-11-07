import React from 'react';
import { Box } from '@mui/material';
import { SectionTop } from './SectionTop/SectionTop';
import { SectionSlides } from './SectionSlides/SectionSlides';
import { SectionLearn } from './SectionLearn/SectionLearn';
import { SectionAddVault } from './SectionAddVault/SectionAddVault';
import { SectionFAQ } from './SectionFAQ/SectionFAQ';
import { SectionProtect } from './SectionProtect/SectionProtect';
import { SectionSteps } from './SectionSteps/SectionSteps';

export function Landing() {
  return (
    <Box>
      <Box>
        <SectionTop />
        <SectionSlides />
        <SectionSteps />
      </Box>

      <SectionProtect />
      <SectionFAQ />
      <SectionAddVault />
      <SectionLearn />
    </Box>
  );
}
