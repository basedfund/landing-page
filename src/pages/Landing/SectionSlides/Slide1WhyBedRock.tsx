import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhyBox } from '../../../components';
import SvgDAI from '../../../assets/images/DAI.svg';
import SvgUSDC from '../../../assets/images/USDC.svg';
import SvgUSDT from '../../../assets/images/USDT.svg';

export function Slide1WhyBedRock() {
  function itemBox(icon: any, iconColor: string, tokenName: string) {
    return (
      <Box bgcolor='#4F4C64' height='70px' marginY='10px' borderRadius='8px' display='flex' alignItems='center' position='relative'>
        <Box borderRadius='50%' bgcolor={iconColor} width='35px' height='35px' display='flex' justifyContent='center' alignItems='center' margin='15px'>
          <img src={icon} width='40%' height='40%' />
        </Box>
        <Typography fontSize='12px' fontFamily='Poppins' color='#ffffff'>
          {tokenName}
        </Typography>
        <Typography position='absolute' right='20px' fontSize='12px' fontFamily='Poppins' color='#4DB2A8'>
          Secured
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <WhyBox
        title={'Why Bedrock?'}
        reason={'Zero Protection'}
        description={'In 2021, criminal hackers stole approximately $3.2 billion in cryptocurrency —and the victims are disproportionately in DeFi.'}
        titleColor='#ffffff'
        rightBgColor='#171A3166'
        items={[
          itemBox(SvgUSDC, '#F2F5FF', 'USDC'),
          itemBox(SvgDAI, '#FFFAF3', 'Maker Dao Dai'),
          itemBox(SvgUSDT, '#4EAD7940', 'USDT')
        ]}
      />
    </Box>
  );
}