import React from 'react';
import { Box } from '@mui/material';
import { WhyBox } from '../../components';

export function Box4HowItWorks() {
  return (
    <Box>
      <WhyBox
        title={"How it works"}
        reason={"Downside Protection"}
        description={"Deposit stablecoins into a Bedrock Safe. If a hack occurs on any of the users Defi protocols - unhacked Safes are partially liquidated and funds are shared with users who filed claims."}
        items={[]}
      />
    </Box>
  );
}
