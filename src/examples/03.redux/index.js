import React from 'react';
import LevelOneComponent from './LevelOneComponent';
// import { connect } from 'react-redux';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import myReducer from './reducer';
const store = createStore(myReducer);

class StatePropFlow extends React.Component {
  render() {
    console.log(this.props.count);
    return (
      <Provider store={store}>
        <div style={{ padding: '50px' }}>
          <Body />
          <br /> <LevelOneComponent />
        </div>
      </Provider>
    );
  }
}

const Body = connect(store => ({
  count: store,
}))(({ count }) => (
  <>
    <b>Count:</b> <span className="count">{count}</span>
  </>
));

export default StatePropFlow;
