import React from 'react';

class LevelThreeComponent extends React.Component {
  render() {
    return (
      <div style={{padding: '20px', border: '1px solid #ddd'}}>
        <h4>Level 3</h4>
        <button className="count-button" onClick={this.props.onClick}>Click me</button>
      </div>
    );
  }
}

export default LevelThreeComponent;
