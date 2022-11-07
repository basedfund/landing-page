import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import SvgCurve3 from '../../../assets/images/curve3.svg';
import SvgMaskGroup from '../../../assets/images/MaskGroup.svg';
import RightArrow from '../../../components/svg/RightArrow';
import styles from './SectionLearn.module.css';

export function SectionLearn() {
  return (
    <Box className={styles.root}>
      <img className={styles.bgImg} src={SvgMaskGroup} />
      <Typography className={styles.title} variant='h4' color='text.primary'>
        Learn
      </Typography>
      <Box className={styles.header}>
        <Typography className={styles.headerText} variant='h2' color='text.primary'>
          Learn more
        </Typography>
        <img className={styles.headerCurve} src={SvgCurve3} />
      </Box>
      <Typography className={styles.description} variant='subtitle2'>
        Deep dive into bedrocks functionality and glossary
      </Typography>
      <Box>
        <Button
          className={styles.learnButton}
          variant='contained'
          endIcon={<RightArrow />}
        >
          Tutorials
        </Button>
        <Button
          className={styles.learnButton}
          variant='contained'
          endIcon={<RightArrow />}
        >
          Key concepts
        </Button>
      </Box>
    </Box>
  );
}
