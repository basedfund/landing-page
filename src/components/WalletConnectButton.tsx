import React from 'react';
import { Button } from '@mui/material';

export function WalletConnectButton() {
  return (
    <Button variant="contained" color="primary" sx={{textTransform: 'none'}}>
      Connect your wallet
    </Button>
  );
}
