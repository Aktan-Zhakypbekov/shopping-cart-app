import { combineReducers } from 'redux';

let cartPressed = (state = false, action) => {
  if (action.type === 'CART_PRESSED') {
    return !state;
  }
  return state;
};

let dataReducer2 = (state = [], action) => {
  if (action.type === 'ADD_ITEM_TO_CART') {
    if (
      (JSON.parse(localStorage.getItem('cartChosenItems')) &&
        JSON.parse(localStorage.getItem('cartChosenItems')).length === 0) ||
      !JSON.parse(localStorage.getItem('cartChosenItems'))
    ) {
      let newArr = [action.payload];
      localStorage.setItem('cartChosenItems', JSON.stringify(newArr));
      return newArr;
    } else if (
      JSON.parse(localStorage.getItem('cartChosenItems')).length !== 0
    ) {
      let newArr = [...JSON.parse(localStorage.getItem('cartChosenItems'))];
      if (newArr.filter((elem) => elem.id === action.payload.id).length === 0) {
        newArr = [...newArr, action.payload];
        localStorage.setItem('cartChosenItems', JSON.stringify(newArr));
        return newArr;
      } else {
        let newArr2 = newArr.map((elem) => {
          if (elem.id === action.payload.id) {
            elem.quantity =
              parseInt(elem.quantity) + parseInt(action.payload.quantity);
          }
          return elem;
        });
        localStorage.setItem('cartChosenItems', JSON.stringify(newArr2));
        return newArr2;
      }
    }
  } else if (action.type === 'INCREMENT_CART_CHOSEN_ITEM') {
    let newArr = JSON.parse(localStorage.getItem('cartChosenItems')).map(
      (elem) => {
        if (elem.id === action.payload.id) {
          elem.quantity = parseInt(elem.quantity) + 1;
        }
        return elem;
      }
    );
    localStorage.setItem('cartChosenItems', JSON.stringify(newArr));
    return newArr;
  } else if (action.type === 'DECREMENT_CART_CHOSEN_ITEM') {
    let newArr = JSON.parse(localStorage.getItem('cartChosenItems'))
      .map((elem) => {
        if (elem.id === action.payload.id) {
          elem.quantity = parseInt(elem.quantity) - 1;
        }
        return elem;
      })
      .filter((elem) => elem.quantity > 0);
    localStorage.setItem('cartChosenItems', JSON.stringify(newArr));
    return newArr;
  }
  return JSON.parse(localStorage.getItem('cartChosenItems'))
    ? JSON.parse(localStorage.getItem('cartChosenItems'))
    : state;
};

let allReducers = combineReducers({
  dataReducer2,
  cartPressed,
});

export default allReducers;

//state = [...state, JSON.parse(JSON.stringify(action.payload))];
