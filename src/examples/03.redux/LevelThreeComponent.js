import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class LevelThreeComponent extends React.Component {
  render() {
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd' }}>
        <h4>Level 3</h4>
        <button className="count-button" onClick={() => this.props.onClick()}>
          Click me
        </button>
      </div>
    );
  }
}

// const stateToProps = state => {
//   return {
//     // count: state.Count,
//   };
// };

const mapDisPatchToProps = (dispatch, props) => {
  return {
    onClick: () => {
      dispatch(actions.onClick());
    },
  };
};

export default connect(
  null,
  mapDisPatchToProps,
)(LevelThreeComponent);
