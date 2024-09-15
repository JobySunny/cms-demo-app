'use client';
import React, {MouseEventHandler} from 'react';
import {Button, Menu, MenuItem} from '@mui/material';
import Link from 'next/link';

const DestinationMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick: MouseEventHandler<HTMLElement> = (event) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        aria-controls='destination-menu'
        aria-haspopup='true'
        sx={{color: '#fff'}}
        onClick={handleClick}>
        Destination
      </Button>
      <Menu
        id='destination-menu'
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <Link
          style={{textDecoration: 'none', color: '#121212'}}
          href='/en/destination'>
          <MenuItem onClick={handleClose}>Dubai</MenuItem>
        </Link>
        <Link
          style={{textDecoration: 'none', color: '#121212'}}
          href='/en/destination'>
          <MenuItem onClick={handleClose}>Abu Dhabi</MenuItem>
        </Link>
        <Link
          style={{textDecoration: 'none', color: '#121212'}}
          href='/en/destination'>
          <MenuItem onClick={handleClose}>Ras Al Khaimah</MenuItem>
        </Link>
      </Menu>
    </>
  );
};

export default DestinationMenu;
