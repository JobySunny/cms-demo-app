import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PhoneIcon from '@mui/icons-material/Phone';
import {AppBar, Toolbar, Box, Button} from '@mui/material';
import DestinationMenu from './DestinationMenu';

export const SiteHeader = ({}) => {
  return (
    <AppBar position='static' sx={{bgcolor: '#111'}}>
      <Toolbar>
        <Link href='/' style={{padding: '4px 0px'}}>
          <Image src='/aldar-logo.webp' alt='Logo' width={50} height={50} />
        </Link>

        <Box sx={{marginLeft: 'auto', gap: '12px', display: 'flex'}}>
          <DestinationMenu />
          <Button
            LinkComponent={Link}
            sx={{color: '#fff'}}
            href='/en/destination'>
            Communities
          </Button>
          <Button
            LinkComponent={Link}
            sx={{color: '#fff'}}
            href='/en/destination'>
            Units
          </Button>
          <Button
            variant='outlined'
            sx={{
              color: '#fff',
              borderRadius: '20px',
              borderWidth: '2px',
              borderColor: '#fff',
            }}
            startIcon={<PhoneIcon />}>
            Contact Us
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;
