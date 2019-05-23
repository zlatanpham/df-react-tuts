import React from 'react';
import { connect } from 'react-redux';

class LevelThreeComponent extends React.Component {
  render() {
    console.log(this.props.count);
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd' }}>
        <h4>Level 3</h4>
        <button className="count-button">Click me</button>
      </div>
    );
  }
}

const toProps = state => {
  return {
    count: state.Count,
  };
};

export default connect(
  toProps,
  null,
)(LevelThreeComponent);
