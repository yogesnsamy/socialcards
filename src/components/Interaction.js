import React from 'react';

const Interaction = props => {
  return (
    <div>
      <i class='fas fa-comments' /> {props.engagement.chat}&emsp;
      <i class='fas fa-retweet' /> {props.engagement.chat}&emsp;
      <i class='fas fa-heart' /> {props.engagement.chat}&emsp;
      <i class='fas fa-envelope' />
    </div>
  );
};

export default Interaction;
