import { combineReducers } from 'redux';

let dataReducer = (state = [], action) => {
  return state;
};

let allReducers = combineReducers({
  dataReducer,
});

export default allReducers;
