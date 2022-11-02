import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Box1WhyBedRock } from './Box1WhyBedRock';
import { Box2TheProblem } from './Box2TheProblem';
import { Box3HowDifferent } from './Box3HowDifferent';
import { Box4HowItWorks } from './Box4HowItWorks';
import { StepCard, PlatformInfoBox } from '../../components';
import { getFAQs, getSafeCnt } from '../../api';
import SvgArrowRight from '../../assets/arrowRight.svg';
import SvgPlus from '../../assets/plus.svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export function Landing() {
  const [faqs, setFaqs] = useState<{ question: string, answer: string }[]>([]);
  const [safeCnt, setSafeCnt] = useState(0);

  useEffect(() => {
    setFaqs(getFAQs());
    setSafeCnt(getSafeCnt());
  }, []);

  return (
    <Box>
      <Box>
        <Box>
          <Box margin={'60px'}>
            <Typography variant='h1' color='text.primary' margin={'20px'}>
              Protect your DeFi assets
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              Deposit your stablecoins to protect your capital against key risks like smart contract hacks or price depeg.
            </Typography>
          </Box>
          <Box>
            <Button variant='outlined' color='primary' sx={{ margin: '15px', padding: '12px 16px 12px 16px', fontSize: '16px', borderRadius: '7.29px', textTransform: 'none', height: '48px', width: '180px' }}>Learn more</Button>
            <Button variant='contained' color='primary' sx={{ margin: '15px', padding: '12px 16px 12px 16px', fontSize: '16px', borderRadius: '7.29px', textTransform: 'none', height: '48px', width: '180px' }}>{'View Vaults ->'}</Button>
          </Box>
        </Box>
        <Stack flexDirection='row' alignItems='center' justifyContent='center' marginTop={'120px'}>
          <PlatformInfoBox value={safeCnt.toString()} suffix={'stablecoins covered'} />
          <PlatformInfoBox value={'automated'} suffix={'claims process'} />
          <PlatformInfoBox value={'-'} suffix={'Currently being audited'} />
        </Stack>

        <Box marginX={'auto'} marginTop={'120px'} marginBottom={'80px'} maxWidth={'600px'}>
          <Typography variant='h3' color='text.primary' fontStyle={'ExtraBold'}>
            Why choose us?
          </Typography>
          <Typography variant='body2' color='secondary' fontStyle={'Medium'} fontWeight={'400'}>
            Bedrock was founded by combination of insurance professionals, former smart contract auditors and technologist passionate about growing DeFi securely.
          </Typography>
        </Box>

        <Box
          maxWidth={'100%'}
        >
          <Stack direction='row'>
            <Box1WhyBedRock />
            <Box2TheProblem />
            <Box3HowDifferent />
            <Box4HowItWorks />
          </Stack>
        </Box>

        <Box marginTop={'250px'}>
          <Typography variant='h2' color='text.primary'>
            How it works
          </Typography>
          <Stack direction='row' alignItems='center' justifyContent='space-around' padding={'20px'}>
            <StepCard
              id={'1'}
              title={'Deposit'}
              description={[
                'Deposit supported pegged assets like stablecoins into a Bedrock Vault.', 
                'Your assets are pooled with others enabling all depositors to be covered but also insure each other.',
                'If you need to withdraw you can at any moment in time. Instant withdrawals are charged a fee,'
              ]}
              rotation={1}
            />
            <StepCard
              id={'2'}
              title={'Depeg or Hack occurs'}
              description={['If your deposited stablecoin experiences a depeg event inline with the stated details on the vault, you are entitled to file a claim.']}
              rotation={-3}
            />
            <StepCard
              id={'3'}
              title={'Reimbursement'}
              description={[
                'Bedrock will validate the depeg automatically, lock assets  across our vaults and reimburse you based on your respective ownership percentage.',
                'To facilitate this we charge a fee.'
              ]}
              rotation={2}
            />
          </Stack>
        </Box>
      </Box>

      <Box maxWidth={'600px'} marginX={'auto'} marginY={'170px'}>
        <Typography variant='h2' color='text.primary' marginY={'20px'}>
          Get Protection
        </Typography>
        <Typography variant='body2' color='secondary.main'>
          Deposit stablecoins and protect against possible depeg events by sharing risks across a basket of depositors.
        </Typography>
        <Button variant='text' sx={{ fontSize: '16px', textTransform: 'none' }}>View all our vaults {'->'}</Button>
      </Box>

      <Box bgcolor={'#3D4559'} borderRadius={'40px'} marginX={'68px'} height={'513px'}>
        <Typography variant='body1' color='text.primary'>Protect your Dai</Typography>
        <Typography variant='h3' color='text.primary'>Protect your stable coins</Typography>
        <Typography variant='body1' color='text.primary'>Deposit Dai and protect yourself from depeg risks</Typography>
      </Box>

      <Box marginTop={'160px'}>
        <Typography variant='h2' color='text.primary'>
          Frequently asked questions
        </Typography>
        <Typography variant='subtitle1' color='secondary.main'>
          browse our faq's below, if you can not find the answer to you're looking for please contact us.
        </Typography>
        <Box maxWidth='808px' marginX='auto'>
          {faqs.map(faq => (
            <Stack direction="row" alignItems="center" justifyContent="space-between" marginY={'20px'}>
              <Typography variant='body2' color='text.primary' letterSpacing='-0.014em' textAlign='left'>
                {faq.question}
              </Typography>
              <img src={SvgPlus} />
            </Stack>
          ))}
        </Box>
      </Box>
      <Box bgcolor={'primary.main'} borderRadius={'16px'} margin={'40px'}>
        <Typography variant='h3' color='text.primary'>
          Have a project in mind?
        </Typography>
        <Typography variant='h3' color='text.primary'>
          Launching a stablecoin or other pegged asset?
        </Typography>
        <Button>
          Apply for a Vault {"->"}
        </Button>
      </Box>
    </Box>
  );
}
