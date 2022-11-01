import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { Box1WhyBedRock } from './Box1WhyBedRock';
import { Box2TheProblem } from './Box2TheProblem';
import { Box3HowDifferent } from './Box3HowDifferent';
import { Box4HowItWorks } from './Box4HowItWorks';
import { StepCard, PlatformInfoBox } from '../../components';

const FAQs = [
  { question: 'What is Bedrock protocol', answer: ''},
  { question: 'How does Bedrock protocol work?', answer: ''},
  { question: 'What does protocls and stablecoins does Bedrock support?', answer: ''},
  { question: 'Is there a token available?', answer: ''},
  { question: 'How can I connect with the team?', answer: ''},
  { question: 'Lorem ipsum', answer: ''},
  { question: 'Ditus out i could have eaten that?', answer: ''}
];

export function Landing() {
  return (
    <Box>
      <Box>
        <Typography variant='inherit' color='text.primary'>
          Protect your DeFi assets
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Deposit your stablecoins to protect your capital against key risks like smart contract hacks or price depeg. 
        </Typography>
        <Box>
          <Button variant='outlined' color='primary'>Learn more</Button>
          <Button variant='contained' color='primary'>{'View Vaults ->'}</Button>
        </Box>
        <Stack direction='row' alignItems='center' justifyContent='space-around' padding={'20px'}>
          <PlatformInfoBox value={'4'} suffix={'stablecoins covered'} />
          <PlatformInfoBox value={'automated'} suffix={'claims process'} />
          <PlatformInfoBox value={'-'} suffix={'Currently being audited'} />
        </Stack>

        <Box>
          <Typography variant='h3' color='text.primary'>
            Why choose us?
          </Typography>
          <Typography variant='h6' color='secondary'>
            Bedrock was founded by combination of insurance professionals, former smart contract auditors and technologist passionate about growing DeFi securely.
          </Typography>
        </Box>

        <Stack direction='row' alignItems='center' justifyContent='space-around' padding={'20px'}>
          <Box1WhyBedRock />
          <Box2TheProblem />
          <Box3HowDifferent />
          <Box4HowItWorks />
        </Stack>

        <Box>
          <Typography variant='h3' color='text.primary'>
            How it works
          </Typography>
          <Stack direction='row' alignItems='center' justifyContent='space-around' padding={'20px'}>
            <StepCard
              id={'1'}
              title={'Deposit'}
              description={'Deposit supported pegged assets like stablecoins into a Bedrock Vault.\r\n\r\nYour assets are pooled with others enabling all depositors to be covered but also insure each other.\r\n\r\nIf you need to withdraw you can at any moment in time. Instant withdrawals are charged a fee,'}
            />
            <StepCard
              id={'2'}
              title={'Depeg or Hack occurs'}
              description={'If your deposited stablecoin experiences a depeg event inline with the stated details on the vault, you are entitled to file a claim.'}
            />
            <StepCard
              id={'3'}
              title={'Reimbursement'}
              description={'Bedrock will validate the depeg automatically, lock assets  across our vaults and reimburse you based on your respective ownership percentage.\r\nTo facilitate this we charge a fee.'}
            />
          </Stack>
        </Box>
      </Box>

      <Box>
        <Typography variant='h3' color='text.primary'>
          Get Protection
        </Typography>
        <Typography variant='body1' color='secondary.main'>
          Deposit stablecoins and protect against possible depeg events by sharing risks across a basket of depositors.
        </Typography>
        <Button variant='text' sx={{textTransform: 'none'}}>View all our vaults {'->'}</Button>
      </Box>

      <Box bgcolor={'#3D4559'} borderRadius={'40px'}>
        <Typography variant='body1' color='text.primary'>Protect your Dai</Typography>
        <Typography variant='h3' color='text.primary'>Protect your stable coins</Typography>
        <Typography variant='body1' color='text.primary'>Deposit Dai and protect yourself from depeg risks</Typography>
      </Box>

      <Box>
        <Typography variant='h3' color='text.primary'>
          Frequently asked questions
        </Typography>
        <Typography variant='body1' color='secondary.main'>
          browse our faq's below, if you can not find the answer to you're looking for please contact us.
        </Typography>
        {FAQs.map(faq => (
          <Box>
            <Typography variant='h6' color='text.primary'>
              {faq.question}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box bgcolor={'primary.main'} borderRadius={'16px'}>
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