import React from 'react';

const Header = props => {
  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>
          Namexxx:
          {props.cicak} {props.handle}
        </div>
        <div className='meta'>{props.subject}</div>
        <div className='description'>author: @{props.author}</div>
      </div>
    </div>
  );
};

export default Header;
