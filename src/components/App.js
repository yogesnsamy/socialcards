import React from 'react';
import Logo from './Logo';
import Header from './Header';
import Content from './Content';
import Interaction from './Interaction';

class App extends React.Component {
  render() {
    const details = {
      name: 'yoges',
      handle: 'cicakYog',
      subject: 'how to be a millionair in 30 days',
      author: 'yoursTruly'
    };

    return (
      <div className='ui grid'>
        <div className='four column row'>
          <div className='four wide column'>
            <Logo />
          </div>
          <div className='twelve wide column'>
            <Header details={details} />
          </div>
        </div>
        <div className='four column row'>
          <div className='right floated column' />
          <div className='four wide column' />
          <div className='twelve wide column'>
            <Content subject={details.subject} />
          </div>
        </div>
        <div className='four column row'>
          <div className='left floated column'>
            <Interaction />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
