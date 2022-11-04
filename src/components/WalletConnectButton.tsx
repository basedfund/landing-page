import React from 'react';
import { Button } from '@mui/material';

export function WalletConnectButton() {
  return (
    <Button variant="contained" color="primary" sx={{textTransform: 'none', fontFamily: 'Spartan'}}>
      Connect your wallet
    </Button>
  );
}
