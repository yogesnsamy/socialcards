import React from 'react';

const Card = props => {
  const details = props.details;
  const listItems = details.map(detail => <li>{detail.name}</li>);
  return <div className='row'>{listItems}</div>;
};

export default Card;
