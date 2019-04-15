import React from 'react';

const Content = props => {
  return (
    <div className='card'>
      <div className='content'>
        <div className='header' />
        <div className='description'>content: {props.subject}</div>
      </div>
    </div>
  );
};

export default Content;
