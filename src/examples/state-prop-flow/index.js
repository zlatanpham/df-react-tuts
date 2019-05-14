import React from 'react';
import LevelOneComponent from './LevelOneComponent';

class StatePropFlow extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div style={{padding: '50px'}}>
        <b>Count:</b> <span className="count">{this.state.count}</span>
        <br /> <LevelOneComponent />
      </div>
    );
  }
}

export default StatePropFlow;
