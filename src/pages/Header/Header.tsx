import React, { useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import { WalletConnectButton } from '../../components/WalletConnectButton';
import BedRockLogo from '../../assets/images/BedRockLogo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" padding={"20px"}>
      <img src={BedRockLogo} />
      <Box display='flex'>
        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
          <Button color="secondary" className={styles.shortButton}>Protect</Button>
          <Button color="secondary" className={styles.shortButton}>Invest</Button>
          <Button color="secondary" className={styles.shortButton}>FAQ</Button>
        </Box>
        <WalletConnectButton />
      </Box>
    </Stack>
  );
}
