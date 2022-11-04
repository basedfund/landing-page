import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhyBox } from '../../../components';
import SvgCaesarzkn1 from '../../../assets/images/Caesarzkn1.svg';
import SvgCaesarzkn2 from '../../../assets/images/Caesarzkn2.svg';
import SvgCaesarzkn3 from '../../../assets/images/Caesarzkn3.svg';

export function Slide2TheProblem() {
  function itemBox(icon: any, iconColor: string, tokenName: string, hackedAmount: string) {
    return (
      <Box bgcolor='#4F4C64' height='70px' marginY='10px' borderRadius='8px' display='flex' alignItems='center' position='relative'>
        <Box borderRadius='50%' bgcolor={iconColor} width='35px' height='35px' display='flex' justifyContent='center' alignItems='center' margin='15px'>
          <img src={icon} width='40%' height='40%' />
        </Box>
        <Typography fontSize='12px' fontFamily='Poppins' color='#ffffff'>
          {tokenName}
        </Typography>
        <Typography position='absolute' right='20px' fontSize='12px' fontFamily='Poppins' color='#ffffff'>
          {hackedAmount}
        </Typography>
      </Box>
    );
  };
  
  return (
    <Box>
      <WhyBox
        title={"The Problem"}
        reason={"Stablecoins aren't stable"}
        description={"Existing DeFi insurance solutions mimic traditional institutions. None are equipped to protect and compensate DeFi users and protocols across Web3."}
        titleColor='#FFB700'
        rightBgColor='#171A3173'
        items={[
          itemBox(SvgCaesarzkn1, '#F2F5FF', 'Wormhole Hack', '$ 325mm'),
          itemBox(SvgCaesarzkn2, '#FFFAF3', 'Beanstalk Hack', '$ 180mm'),
          itemBox(SvgCaesarzkn3, '#FFF7F7', 'Terra UST', '$ 42bil')
        ]}
      />
    </Box>
  );
}
