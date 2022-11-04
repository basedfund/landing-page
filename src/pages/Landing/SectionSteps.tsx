import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { StepCard } from '../../components';
import SvgArrow2 from '../../assets/images/arrow2.svg';
import SvgArrow3 from '../../assets/images/arrow3.svg';
import SvgCurve2 from '../../assets/images/curve2.svg';

export function SectionSteps() {
  return (
    <Box marginTop='250px'>
      <Box position={'relative'} width={'fit-content'} marginX={'auto'}>
        <Typography variant='h2' color='text.primary' marginBottom='150px'>
          How it works
        </Typography>
        <img src={SvgCurve2} style={{ position: 'absolute', right: '-60px', bottom: '-15px' }} />
      </Box>
      <Stack direction='row' alignItems='center' justifyContent='center' spacing='22px'>
        <StepCard
          id={'1'}
          title={'Deposit'}
          description={[
            'Deposit supported pegged assets like stablecoins into a Bedrock Vault.',
            'Your assets are pooled with others enabling all depositors to be covered but also insure each other.',
            'If you need to withdraw you can at any moment in time. Instant withdrawals are charged a fee,'
          ]}
          rotation={-1}
          top='-25px'
        />
        <Box height='480px' width='1px' position='relative'>
          <img src={SvgArrow2} style={{ position: 'absolute', left: '-75px', top: '-25px', zIndex: '1' }} />
        </Box>
        <StepCard
          id={'2'}
          title={'Depeg or Hack occurs'}
          description={['If your deposited stablecoin experiences a depeg event inline with the stated details on the vault, you are entitled to file a claim.']}
          rotation={3}
          top='5px'
        />
        <Box height='480px' width='1px' position='relative'>
          <img src={SvgArrow3} style={{ position: 'absolute', left: '-60px', bottom: '80px', zIndex: '1' }} />
        </Box>
        <StepCard
          id={'3'}
          title={'Reimbursement'}
          description={[
            'Bedrock will validate the depeg automatically, lock assets  across our vaults and reimburse you based on your respective ownership percentage.',
            'To facilitate this we charge a fee.'
          ]}
          rotation={-2}
          top='-2px'
        />
      </Stack>
    </Box>
  );
}
