import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Box1WhyBedRock } from './Box1WhyBedRock';
import { Box2TheProblem } from './Box2TheProblem';
import { Box3HowDifferent } from './Box3HowDifferent';
import { Box4HowItWorks } from './Box4HowItWorks';
import { StepCard, PlatformInfoBox } from '../../components';
import { getFAQs, getSafeCnt } from '../../api';
import SvgPlus from '../../assets/plus.svg';
import SvgArrow1 from '../../assets/arrow1.svg';
import SvgArrow2 from '../../assets/arrow2.svg';
import SvgArrow3 from '../../assets/arrow3.svg';
import SvgCurve1 from '../../assets/curve1.svg';
import SvgCurve2 from '../../assets/curve2.svg';
import SvgSparkle from '../../assets/Sparkle.svg';
import PngDAI from '../../assets/DAI.png';

import RightArrow from '../../components/svg/RightArrow';

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
          <Box margin={'60px'} flex={'true'}>
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
            <Button variant='outlined' color='primary' sx={{ margin: '15px', padding: '12px 16px 12px 16px', fontSize: '16px', borderRadius: '7.29px', textTransform: 'none', height: '48px', width: '180px' }}>
              Learn more
            </Button>
            <Button variant='contained' color='primary' sx={{ margin: '15px', padding: '12px 16px 12px 16px', fontSize: '16px', borderRadius: '7.29px', textTransform: 'none', height: '48px', width: '180px' }} endIcon={<RightArrow />}>
              {"View Vaults"}
            </Button>
          </Box>
        </Box>
        <Stack flexDirection='row' alignItems='center' justifyContent='center' marginTop={'120px'}>
          <PlatformInfoBox value={safeCnt.toString()} suffix={'stablecoins covered'} />
          <PlatformInfoBox value={'automated'} suffix={'claims process'} />
          <PlatformInfoBox value={'-'} suffix={'Currently being audited'} />
        </Stack>

        <Box marginX={'auto'} marginTop={'50px'} marginBottom={'120px'} maxWidth={'600px'}>
          <img src={SvgArrow1} />
          <Typography variant='h3' color='text.primary' fontStyle={'ExtraBold'} marginY={'10px'}>
            Why choose us?
          </Typography>
          <Typography variant='body2' color='secondary' fontStyle={'Medium'} fontWeight={'400'}>
            Bedrock was founded by combination of insurance professionals, former smart contract auditors and technologist passionate about growing DeFi securely.
          </Typography>
        </Box>

        <ScrollContainer>
          <Box maxWidth='100%' paddingX='50px'>
            <Stack direction='row'>
              <Box1WhyBedRock />
              <Box2TheProblem />
              <Box3HowDifferent />
              <Box4HowItWorks />
            </Stack>
          </Box>
        </ScrollContainer>

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
      </Box>

      <Box maxWidth={'600px'} marginX={'auto'} marginY={'170px'}>
        <Box position={'relative'} width={'fit-content'} marginX={'auto'}>
          <Typography variant='h2' color='text.primary' marginY={'20px'}>
            Get Protection
          </Typography>
          <img src={SvgSparkle} style={{ position: 'absolute', right: '-40px', bottom: '20px' }} />
        </Box>
        <Typography variant='body2' color='secondary.main'>
          Deposit stablecoins and protect against possible depeg events by sharing risks across a basket of depositors.
        </Typography>
        <Button variant='text' sx={{ fontSize: '18px', textTransform: 'none', marginTop: '10px' }} endIcon={<RightArrow />}>View all our vaults</Button>
      </Box>

      <Box bgcolor={'#3D4559'} borderRadius={'40px'} marginX={'80px'} height={'550px'} position='relative'>
        <img src={PngDAI} style={{ position: 'absolute', left: '50px', top: '-60px' }} />
        <Grid container width='100%' height='100%'>
          <Grid item xs={5}>
            <Box textAlign='left' paddingLeft='15%' height='100%' display='flex' alignItems='center'>
              <Box flexDirection='column' display='flex' marginTop='-100px'>
                <Typography variant='subtitle1' color='text.primary'>Protect your Dai</Typography>
                <Typography variant='h2' color='text.primary' marginY='20px'>Protect your stable coins</Typography>
                <Typography variant='body1' color='text.primary'>Deposit Dai and protect yourself from depeg risks</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={6}>
            <Box bgcolor='#16213E' width='90%' height='55%' marginTop='12%' borderRadius='25px' display='flex' alignItems='center' justifyContent='center' textAlign='left'>
              <Box width='80%' marginX='auto' position='relative'>
                <Box flexDirection='row' display='flex' width='100%' marginBottom='20px'>
                  <Typography variant='h5' color='text.primary'>Current Capacity Available</Typography>
                  <Typography variant='h5' color='text.primary' right='0' position='absolute'>19.35M</Typography>
                </Box>
                <Box flexDirection='row' display='flex' width='100%' marginBottom='20px'>
                  <Typography variant='h5' color='text.primary'>Deposit Fee</Typography>
                  <Typography variant='h5' color='text.primary' right='0' position='absolute'>0.25%</Typography>
                </Box>
                <Box bgcolor='#ffffff' width='100%' marginTop='70px' borderRadius='15px' paddingY='15px' display='flex'>
                  <Typography variant='body2' color='#606274' marginLeft='35px'>
                    Protect your DAI &nbsp; 0.00
                  </Typography>
                  <Button variant='contained' sx={{ width: '40%', fontSize: '14px', right: '5px', bottom: '10px', position: 'absolute', bgcolor: '#1E266D' }}>
                    PROTECT
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
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
        <Button endIcon={<RightArrow />}>
          Apply for a Vault
        </Button>
      </Box>
    </Box>
  );
}
