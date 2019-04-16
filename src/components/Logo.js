import React from 'react';
import logo from '../images/logo.png'; // Tell Webpack this JS file uses this image

const Logo = () => {
  return (
    <div>
      {' '}
      <img src={logo} alt='company logo' style={{ width: '100%' }} />
    </div>
  );
  // <img src={logo} alt='company logo' />;
};

export default Logo;
