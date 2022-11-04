import React from 'react';
import { Box, Typography } from '@mui/material';
import SvgMaskGroup2 from '../../assets/images/MaskGroup2.svg';
import { SectionCommunity } from './SectionCommunity';
import { SectionLinks } from './SectionLinks';

export function Footer() {
  return (
    <Box width='85%' marginX='auto' borderRadius='40px' bgcolor='#4AA79E' position='relative' marginTop='-100px' marginBottom='20px' border='7px solid #ffffff' overflow='hidden'>
      <img src={SvgMaskGroup2} style={{ position: 'absolute', left: '0', top: '0', width: '100%' }} />
      
      <SectionCommunity />
      <SectionLinks />

      <Box width='85%' marginX='auto' position='relative' paddingBottom='150px'>
        <Typography variant='subtitle1' color='#A4FBF3' position='absolute' left='0'>
          Copyright © 2023 based inc
        </Typography>
        <Typography variant='subtitle1' color='#DFE0EB' position='absolute' right='0'>
          Manage settings
        </Typography>
      </Box>
    </Box>
  );
}
