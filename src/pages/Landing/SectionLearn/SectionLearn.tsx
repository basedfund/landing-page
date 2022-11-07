import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SvgCurve3 from '../../../assets/images/curve3.svg';
import SvgMaskGroup from '../../../assets/images/MaskGroup.svg';
import RightArrow from '../../../components/svg/RightArrow';
import styles from './SectionLearn.module.css';

export function SectionLearn() {
  return (
    <Box width='85%' marginX='auto' borderRadius='40px' height='600px' position='relative' bgcolor='#3D4559' zIndex='-1' overflow='hidden'>
      <img src={SvgMaskGroup} style={{ position: 'absolute', left: '0', top: '0', width: '100%' }} />
      <Typography variant='h4' color='text.primary' sx={{ opacity: '50%', paddingTop: '75px' }}>
        Learn
      </Typography>
      <Box position='relative' width='fit-content' marginX='auto' marginY='30px'>
        <Typography variant='h2' color='text.primary'>
          Learn more
        </Typography>
        <img src={SvgCurve3} style={{ position: 'absolute', right: '0', bottom: '-10px' }} />
      </Box>
      <Typography variant='h6' color='#D3D5DA' paddingX='5px'>
        Deep dive into bedrocks functionality and glossary
      </Typography>
      <Box marginY='20px'>
        <Button
          variant='contained'
          className={styles.learnButton}
          endIcon={<RightArrow />}
        >
          Tutorials
        </Button>
        <Button
          variant='contained'
          className={styles.learnButton}
          endIcon={<RightArrow />}
        >
          Key concepts
        </Button>
      </Box>
    </Box>
  );
}
