import React from 'react';

const Header = props => {
  return (
    <div class='card-body'>
      <h5 class='card-title'>
        {' '}
        {props.details.name} {props.details.handle}
      </h5>
      <p class='card-text'>{props.details.subject}</p>
      <p class='card-text'>author: @{props.details.author}</p>
    </div>
  );
};

export default Header;
