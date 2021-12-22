import React, { useEffect, useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../../Cart';

const Nav = () => {
  const dispatch = useDispatch();
  let cartPressed = useSelector((state) => state.cartPressed);

  let cartItems = useSelector((state) => state.dataReducer2);

  let cartItemsQuantity = cartItems
    .map((elem) => elem.quantity)
    .reduce(
      (previousValue, currentValue) =>
        parseInt(previousValue) + parseInt(currentValue),
      0
    );

  return (
    <div className='nav-cont'>
      {cartPressed ? <Cart /> : null}
      <div className='nav-logo-cont'>LOGO</div>
      <div className='nav-functionality-cont'>
        <Link to='/'>
          <div className='nav-functionality-cont__nav-link'>Homepage</div>
        </Link>
        <Link to='/productsPage'>
          <div className='nav-functionality-cont__nav-link'>Products</div>
        </Link>
        <Link to='/contactsPage'>
          <div className='nav-functionality-cont__nav-link'>Contacts</div>
        </Link>
        <div className='nav-functionality-cont__cart-cont'>
          <div className='nav-functionality-cont__cart-cont__cart-items-qnty'>
            {cartItemsQuantity}
          </div>
          <button
            className='nav-functionality-cont__cart-cont__cart-btn'
            onClick={() => {
              dispatch({ type: 'CART_PRESSED' });
            }}
          >
            Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
