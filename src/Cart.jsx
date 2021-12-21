import React from 'react';
import './Cart.css';

const Cart = () => {
  return (
    <div className='cart-cont'>
      <div className='cart-content'>
        <div className='cart-content__title-cont'>Cart</div>
        <div className='cart-content__cart-items-cont'></div>
        <div className='cart-content__total-price-cont'></div>
        <button className='cart-content__buy-btn'>Buy</button>
        <div className='cart-content__back-link-cont'>
          <div className='cart-content__back-link-cont__back-link'>Back</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
