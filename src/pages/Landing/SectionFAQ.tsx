import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { getFAQs } from '../../api';
import SvgPlus from '../../assets/images/plus.svg';
import SvgOval from '../../assets/images/Oval.svg';

export function SectionFAQ() {
  const [faqs, setFaqs] = useState<{ question: string, answer: string }[]>([]);

  useEffect(() => {
    setFaqs(getFAQs());
  }, []);

  return (
    <Box marginTop='160px'>
      <Box position='relative' width='fit-content' marginX='auto' marginY='20px'>
        <Typography variant='h2' color='text.primary'>
          Frequently asked questions
        </Typography>
        <img src={SvgOval} style={{ position: 'absolute', right: '0', bottom: '-5px' }} />
      </Box>
      <Typography variant='subtitle1' color='secondary.main' fontStyle='SemiBold'>
        browse our faq's below, if you can not find the answer to you're looking for please contact us.
      </Typography>
      <Box maxWidth='808px' marginX='auto' marginY='80px' borderTop='1px solid #393953'>
        {faqs.map((faq, id) => (
          <Stack key={id} direction="row" alignItems="center" justifyContent="space-between" paddingY='20px' borderBottom='1px solid #393953'>
            <Typography variant='body2' color='text.primary' letterSpacing='-0.014em' textAlign='left'>
              {faq.question}
            </Typography>
            <img src={SvgPlus} />
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
