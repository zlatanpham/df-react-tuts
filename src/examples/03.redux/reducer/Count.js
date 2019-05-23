import * as types from '../constants/ActionType';

const myReducer = (state = 0, action) => {
  switch (action.type) {
    case types.ON_CLICK:
      console.log(action);
      return state + 1;
    default:
      return state;
  }
};

export default myReducer;
