import React from 'react';
import { Box, Typography } from '@mui/material';
import { WhyBox } from '../../../components';
import SvgDownArrow from '../../../assets/images/DownArrow.svg';
import SvgDAI from '../../../assets/images/DAI.svg';
import SvgUSDT from '../../../assets/images/USDT.svg';

export function Slide4HowItWorks() {
  function itemBox(icon: any, iconColor: string, description: string, iconSizePercent: string) {
    return (
      <Box bgcolor='#ffffff' height='70px' marginY='10px' borderRadius='8px' display='flex' alignItems='center' position='relative' textAlign='left'>
        <Box borderRadius='50%' bgcolor={iconColor} width='35px' height='35px' display='flex' justifyContent='center' alignItems='center' margin='15px'>
          <img src={icon} width={iconSizePercent} height={iconSizePercent} />
        </Box>
        <Typography fontSize='12px' fontFamily='Poppins' color='#1E266D' width='70%'>
          {description}
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <WhyBox
        title={"How it works"}
        reason={"Downside Protection"}
        description={"Deposit stablecoins into a Bedrock Safe. If a hack occurs on any of the users Defi protocols - unhacked Safes are partially liquidated and funds are shared with users who filed claims."}
        titleColor='#FFB700'
        rightBgColor='#F4F7FE'
        items={[
          itemBox(SvgDownArrow, '#FFCCDB', 'Dai depegs from .99 to .20 ', '60%'),
          itemBox(SvgDAI, '#FFFAF3', 'Users who deposited Dai file a claim', '40%'),
          itemBox(SvgUSDT, '#4EAD7940', 'Our Smart Contracts reimburse claimants with USDT and USDC', '40%')
        ]}
      />
    </Box>
  );
}
