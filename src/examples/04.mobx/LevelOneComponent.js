import React from 'react';
import LevelTwoComponent from './LevelTwoComponent';

class LevelOneComponent extends React.Component {
  render() {
    return (
      <div style={{padding: '20px', border: '1px solid #ddd'}}>
        <h4>Level 1</h4>
        <LevelTwoComponent />
      </div>
    );
  }
}

export default LevelOneComponent;
