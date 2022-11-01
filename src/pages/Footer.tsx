import React from 'react';
import { Box, Stack, Button, Typography } from '@mui/material';
import BedRockLogo from '../assets/BedRockLogo.svg';

export function Footer() {  
  return (
    <Box>
      <Box>
        Learn
        Learn more
        Deep dive into bedrocks functionality and glossary
        <Box>
          <Button>Tutorials</Button>
          <Button>Key concepts</Button>
        </Box>
      </Box>
      <Box>
        Community
        Stay updated
        Connect with us to get all the updated on the email which you will put.
        <Box>
          Enter your email address
        </Box>
        Join others in learning how to protect your cyrpto assets

        <Stack direction='row' alignItems='center' justifyContent='space-around' padding={'10px'}>
          <Box>
            <img src={BedRockLogo} />
            We use the cookies on the website to improve your experience, analyze traffic, and for basic functionality. Cookies are anonymous and do not link to user data. You can still use the website without cookies. For more information, please read our
          </Box>
          <Box>
            Legal
            Privecy Policy
            Terms & Conditions
            Contact
          </Box>
          <Box>
            Data
            Defi llama
            Github
            Invest in Bedrock
          </Box>
          <Box>
            Community
            <Box>instagram</Box>
            <Box>Twich</Box>
            <Box>Twitter</Box>
            Blog
            FAQ's
            Knowledge Center
          </Box>
        </Stack>

        <Box>
          Copyright © 2023 based inc
          Manage settings
        </Box>
      </Box>
    </Box>
  );
}
