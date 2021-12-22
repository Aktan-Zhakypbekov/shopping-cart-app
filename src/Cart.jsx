import React from 'react';
import './Cart.css';
import CartChosenItem from './CartChosenItem';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();

  const cartChosenItems = useSelector((state) => state.dataReducer2);

  return (
    <div className='cart-cont'>
      {cartChosenItems.length === 0 ? (
        <div>Empty</div>
      ) : (
        <div className='cart-content'>
          <div className='cart-content__title-cont'>Shopping Cart</div>
          <div className='cart-content__inventory'>
            <div className='cart-content__inventory__cart-items-cont'>
              {cartChosenItems.map((elem) => {
                return <CartChosenItem key={elem.id} cartChosenItem={elem} />;
              })}
            </div>
            <div className='cart-content__inventory__total-price-cont'>
              Total Price: $
              {cartChosenItems
                .map((elem) => parseInt(elem.quantity) * parseInt(elem.price))
                .reduce((prev, curr) => {
                  return prev + curr;
                }, 0)}
            </div>
          </div>
          <button className='cart-content__buy-btn'>Buy</button>
          <div className='cart-content__back-link-cont'>
            <button
              className='cart-content__back-link-cont__back-link'
              onClick={() => {
                dispatch({ type: 'CART_PRESSED' });
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
