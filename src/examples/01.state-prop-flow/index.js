import React from 'react';
import LevelOneComponent from './LevelOneComponent';

class StatePropFlow extends React.Component {
  state = {
    count: 0,
  };
  onClick = () => {

    this.setState((state) => ({
      count: state.count + 1,
    }));
    
    this.setState((state) => ({
      count: state.count + 1,
    }));

  };

  render() {
    return (
      <div style={{ padding: '50px' }}>
        <b>Count:</b> <span className="count">{this.state.count}</span>
        <br /> <LevelOneComponent onClick={this.onClick} />
      </div>
    );
  }
}

export default StatePropFlow;
