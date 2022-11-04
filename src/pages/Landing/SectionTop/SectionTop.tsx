import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { getSafeCnt } from '../../../api';
import { PlatformInfoBox } from '../../../components';
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
    <Box>
      <Box>
        <Box sx={{marginX: {xs: '10px', md: '60px'}, marginY: '60px'}} flex='true'>
          <Box position={'relative'} width={'fit-content'} marginX={'auto'}>
            <Typography variant='h1' color='text.primary' margin={'20px'}>
              Protect your DeFi assets
            </Typography>
            <img src={SvgCurve1} style={{ position: 'absolute', right: '0px', bottom: '-15px' }} />
          </Box>
          <Typography variant='h6' color='text.secondary'>
            Deposit your stablecoins to protect your capital against key risks like smart contract hacks or price depeg.
          </Typography>
        </Box>
        <Box>
          <Button variant='outlined' color='primary' className={styles.learnButton}>
            Learn more
          </Button>
          <Button variant='contained' color='primary' className={styles.learnButton} endIcon={<RightArrow />}>
            View Vaults
          </Button>
        </Box>
      </Box>
      <Stack sx={{flexDirection: {xs: 'column', sm: 'row'}}} alignItems='center' justifyContent='center' marginTop={'120px'}>
        <PlatformInfoBox value={safeCnt.toString()} suffix={'stablecoins covered'} />
        <PlatformInfoBox value={'automated'} suffix={'claims process'} />
        <PlatformInfoBox value={'-'} suffix={'Currently being audited'} />
      </Stack>

      <Box marginX='auto' marginTop='50px' marginBottom='120px' maxWidth='600px'>
        <img src={SvgArrow1} />
        <Typography variant='h3' color='text.primary' fontStyle='ExtraBold' marginY='10px'>
          Why choose us?
        </Typography>
        <Typography variant='body2' color='secondary' fontStyle='Medium' fontWeight='400'>
          Bedrock was founded by combination of insurance professionals, former smart contract auditors and technologist passionate about growing DeFi securely.
        </Typography>
      </Box>
    </Box>
  );
}
