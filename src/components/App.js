import React from 'react';
import Card from './Card';
import Logo from './Logo';
import Header from './Header';
import Content from './Content';
import Interaction from './Interaction';

class App extends React.Component {
  render() {
    const details = [
      {
        name: 'yoges',
        handle: 'cicakYog',
        subject: 'how to be a millionair in 30 days',
        author: 'yoursTruly',
        engagement: {
          chat: 22,
          rt: 0,
          likes: 50
        }
      },
      {
        name: 'bala',
        handle: 'bolaBa',
        subject: 'permainan bola sepak terhebat di dunia',
        author: 'balansmay',
        engagement: {
          chat: 9,
          rt: 10,
          likes: 84
        }
      }
    ];
    return (
      <div className='container'>
        <Card details={details} />
      </div>
    );
  }
}

export default App;
