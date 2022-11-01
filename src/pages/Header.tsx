import React from 'react';
import { Box, Stack, Button } from '@mui/material';
import { WalletConnectButton } from '../components/WalletConnectButton';
import BedRockLogo from '../assets/BedRockLogo.svg';

export function Header() {  
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" padding={"20px"}>
      <img src={BedRockLogo} />
      <Box>
        <Button color="secondary" sx={{textTransform: 'none'}}>Protect</Button>
        <Button color="secondary" sx={{textTransform: 'none'}}>Invest</Button>
        <Button color="secondary" sx={{textTransform: 'none'}}>FAQ</Button>
        <WalletConnectButton />
      </Box>
    </Stack>
  );
}
