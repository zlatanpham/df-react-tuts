import React from 'react';
import AppContext from './AppContext';

class LevelThreeComponent extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
        {context => (
          <div style={{ padding: '20px', border: '1px solid #ddd' }}>
            <h4>Level 3 </h4>
            <button className="count-button" onClick={context.onClick}>
              {' '}
              Click me
            </button>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default LevelThreeComponent;
