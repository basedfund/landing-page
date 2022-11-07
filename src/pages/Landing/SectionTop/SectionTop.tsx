import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { getSafeCnt } from '../../../api';
import { StatusBox } from './StatusBox';
import SvgArrow1 from '../../../assets/images/arrow1.svg';
import SvgCurve1 from '../../../assets/images/curve1.svg';
import RightArrow from '../../../components/svg/RightArrow';
import styles from './SectionTop.module.css';

export function SectionTop() {
  const [safeCnt, setSafeCnt] = useState(0);

  useEffect(() => {
    setSafeCnt(getSafeCnt());
  }, []);

  return (
    <Box className={styles.root}>
      <Box className={styles.titleContainer}>
        <Typography className={styles.title} variant='h1' color='text.primary'>
          Protect your DeFi assets
        </Typography>
        <img className={styles.downCurve} src={SvgCurve1} />
      </Box>
      <Typography className={styles.intro} variant='subtitle1' color='text.secondary'>
        Deposit your stablecoins to protect your capital against key risks like smart contract hacks or price depeg.
      </Typography>
      <Box className={styles.learnButtons}>
        <Button className={styles.learnButton} variant='outlined' color='primary'>
          Learn more
        </Button>
        <Button className={styles.learnButton} variant='contained' color='primary' endIcon={<RightArrow />}>
          View Vaults
        </Button>
      </Box>
      <Stack className={styles.statusGroup}>
        <StatusBox value={safeCnt.toString()} suffix='stablecoins covered' />
        <StatusBox value='automated' suffix='claims process' />
        <StatusBox value='-' suffix='Currently being audited' />
      </Stack>

      <Box className={styles.advantageBox} >
        <img src={SvgArrow1} />
        <Typography variant='h3' color='text.primary' className={styles.reasonTitle}>
          Why choose us?
        </Typography>
        <Typography variant='body2' color='secondary'>
          Bedrock was founded by combination of insurance professionals, former smart contract auditors and technologist passionate about growing DeFi securely.
        </Typography>
      </Box>
    </Box>
  );
}
