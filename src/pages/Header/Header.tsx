import React, { useState } from 'react';
import { Box, Stack, Button } from '@mui/material';
import { WalletConnectButton } from '../../components/WalletConnectButton/WalletConnectButton';
import BedRockLogo from '../../assets/images/BedRockLogo.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <Stack className={styles.root} direction='row'>
      <img src={BedRockLogo} />
      <Box className={styles.rightGroup}>
        <Box className={styles.buttonGroup}>
          <Button className={styles.shortButton} color="secondary">Protect</Button>
          <Button className={styles.shortButton} color="secondary">Invest</Button>
          <Button className={styles.shortButton} color="secondary">FAQ</Button>
        </Box>
        <WalletConnectButton />
      </Box>
    </Stack>
  );
}
