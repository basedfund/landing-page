import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhyBox } from '../../../components';
import SvgDAI from '../../../assets/images/DAI.svg';
import SvgUSDC from '../../../assets/images/USDC.svg';
import SvgUSDT from '../../../assets/images/USDT.svg';
import CheckCircle from '../../../components/svg/CheckCircle';

export function Slide3HowDifferent() {
  function itemBox(icon: any, iconColor: string, tokenName: string, checkCircleColor: string) {
    return (
      <Box bgcolor='#ffffff' height='70px' marginY='10px' borderRadius='8px' display='flex' alignItems='center' position='relative'>
        <Box borderRadius='50%' bgcolor={iconColor} width='35px' height='35px' display='flex' justifyContent='center' alignItems='center' margin='15px'>
          <img src={icon} width='40%' height='40%' />
        </Box>
        <Typography fontSize='12px' fontFamily='Poppins' color='#1E266D'>
          Deposit {tokenName}
        </Typography>
        <Box position='absolute' right='20px' color={checkCircleColor}>
          <CheckCircle />
        </Box>
      </Box>
    );
  };

  return (
    <Box>
      <WhyBox
        title={"How we are different"}
        reason={"Safe & Secure"}
        description={"On BedRock you deposit Defi assets to pool and spread risk with like-minded users and protocols. Depositers are both the insured and insurer"}
        titleColor='#FFB700'
        rightBgColor='#F4F7FE'
        items={[
          itemBox(SvgUSDC, '#F2F5FF', 'USDC', '#2A3275'),
          itemBox(SvgDAI, '#FFFAF3', 'Dai', '#F5AC37'),
          itemBox(SvgUSDT, '#4EAD7940', 'USDT', '#2BB28E')
        ]}
      />
    </Box>
  );
}
