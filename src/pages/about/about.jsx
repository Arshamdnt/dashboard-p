import React from 'react';
import { IconButton } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import './about.css';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <IconButton 
        className="social-icon github-icon" 
        onClick={() => window.open('https://github.com/Arshamdnt', '_blank')}
      >
        <GitHub fontSize="large" />
      </IconButton>
      <IconButton className="social-icon instagram-icon disabled">
        <Instagram fontSize="large" />
      </IconButton>
      <IconButton className="social-icon linkedin-icon disabled">
        <LinkedIn fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SocialLinks;
