import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import RightArrow from '../../../components/svg/RightArrow';
import styles from './SectionAddVault.module.css';
import { URL_ADD_VAULT } from '../../../api';

export function SectionAddVault() {
  const goToAddVault = () => {
    window.open(URL_ADD_VAULT, '_blank');
  }

  return (
    <Box className={styles.root}>
      <Typography className={styles.title} variant='body2' color='text.primary'>
        Have a project in mind?
      </Typography>
      <Typography className={styles.question} variant='h2' color='text.primary'>
        Launching a stablecoin or other pegged asset?
      </Typography>
      <Button className={styles.button} variant='contained' onClick={goToAddVault} endIcon={<RightArrow />}>
        Apply for a Vault
      </Button>
    </Box>
  );
}
