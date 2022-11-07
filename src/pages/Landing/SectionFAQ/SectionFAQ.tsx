import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { getFAQs } from '../../../api';
import SvgPlus from '../../../assets/images/plus.svg';
import SvgOval from '../../../assets/images/Oval.svg';
import styles from './SectionFAQ.module.css';

export function SectionFAQ() {
  const [faqs, setFaqs] = useState<{ question: string, answer: string }[]>([]);

  useEffect(() => {
    setFaqs(getFAQs());
  }, []);

  return (
    <Box className={styles.root}>
      <Box className={styles.title}>
        <Typography variant='h2' color='text.primary'>
          Frequently asked questions
        </Typography>
        <img className={styles.oval} src={SvgOval} />
      </Box>
      <Typography className={styles.description} variant='body1' color='secondary.main'>
        browse our faq's below, if you can not find the answer to you're looking for please contact us.
      </Typography>
      <Box className={styles.faqList}>
        {faqs.map((faq, id) => (
          <Stack className={styles.faqRow} key={id} direction='row'>
            <Typography className={styles.question} variant='body2' color='text.primary'>
              {faq.question}
            </Typography>
            <img src={SvgPlus} />
          </Stack>
        ))}
      </Box>
    </Box>
  );
}
