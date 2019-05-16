import React from 'react';
import LevelOneComponent from './LevelOneComponent';
import AppContext from './AppContext';

class StatePropFlow extends React.Component {
  state = {
    count: 0,
  };

  onClick = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };
  render() {
    return (
      <AppContext.Provider
        value={{

          onClick: this.onClick
        }}
      >
        <div style={{ padding: '50px' }}>
          <b>Count:</b> <span className="count">{this.state.count}</span>
          <br />
          <LevelOneComponent />
        </div>
      </AppContext.Provider>
    );
  }
}

export default StatePropFlow;
