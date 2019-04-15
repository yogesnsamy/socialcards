import React from 'react';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image

const Logo = () => {
  return (
    <div>
      <img
        className='ui top aligned tiny image'
        src={logo}
        alt='company logo'
      />
    </div>
  );
};

export default Logo;
