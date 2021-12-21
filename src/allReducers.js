import { combineReducers } from 'redux';

let dataReducer2 = (state = [], action) => {
  if (action.type === 'ADD_ITEM_TO_CART') {
    if (state.length === 0) {
      state = [action.payload];
    } else {
      let newArr = [...state];
      if (newArr.filter((elem) => elem.id === action.payload.id).length === 0) {
        newArr = [...newArr, action.payload];
        return newArr;
      } else {
        return newArr.map((elem) => {
          if (elem.id === action.payload.id) {
            elem.quantity =
              parseInt(elem.quantity) + parseInt(action.payload.quantity);
          }
          return elem;
        });
      }
    }
  }
  return state;
};

let allReducers = combineReducers({
  dataReducer2,
});

export default allReducers;

//state = [...state, JSON.parse(JSON.stringify(action.payload))];
