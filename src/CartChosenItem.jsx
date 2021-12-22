import React from 'react';
import './CartChosenItem.css';
import { useDispatch } from 'react-redux';

const CartChosenItem = ({ cartChosenItem }) => {
  const dispatch = useDispatch();

  const incrementCartChosenItem = () => {
    dispatch({ type: 'INCREMENT_CART_CHOSEN_ITEM', payload: cartChosenItem });
  };

  const decrementCartChosenItem = () => {
    dispatch({ type: 'DECREMENT_CART_CHOSEN_ITEM', payload: cartChosenItem });
  };

  return (
    <div className='cart-chosen-item-cont'>
      <div className='cart-chosen-item-cont__img-cont'>
        <div className='cart-chosen-item-cont__img-cont__inner'>
          <img
            src={cartChosenItem.image}
            alt='img'
            className='cart-chosen-item-cont__img-cont__inner__img'
          />
        </div>
      </div>
      <div className='cart-chosen-item-cont__info-cont'>
        <div className='cart-chosen-item-cont__info-cont__title'>
          {cartChosenItem.title}
        </div>
        <div className='cart-chosen-item-cont__info-cont__price'>
          ${parseInt(cartChosenItem.price) * parseInt(cartChosenItem.quantity)}
        </div>
        <div className='cart-chosen-item-cont__info-cont__add-subtract-functionality-cont'>
          <button
            className='cart-chosen-item-cont__info-cont__add-subtract-functionality-cont__subtract-btn'
            onClick={decrementCartChosenItem}
          >
            -
          </button>
          <div className='cart-chosen-item-cont__info-cont__add-subtract-functionality-cont__qnty'>
            {cartChosenItem.quantity}
          </div>
          <button
            className='cart-chosen-item-cont__info-cont__add-subtract-functionality-cont__add-btn'
            onClick={incrementCartChosenItem}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartChosenItem;
