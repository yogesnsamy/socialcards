import React from 'react';

const Header = props => {
  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>
          <strong>{props.details.name}</strong> {props.details.handle}
        </div>
        <div className='meta'>{props.details.subject}</div>
        <div className='description'>author: @{props.details.author}</div>
      </div>
    </div>
  );
};

export default Header;
