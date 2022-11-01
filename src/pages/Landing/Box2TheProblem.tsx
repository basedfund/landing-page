import React from 'react';
import { Box } from '@mui/material';
import { WhyBox } from '../../components';

export function Box2TheProblem() {
  return (
    <Box>
      <WhyBox
        title={"The Problem"}
        reason={"Stablecoins aren't stable"}
        description={"Existing DeFi insurance solutions mimic traditional institutions. None are equipped to protect and compensate DeFi users and protocols across Web3."}
        items={[]}
      />
    </Box>
  );
}
