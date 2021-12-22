import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CardItem = ({ itemData }) => {
  const [itemInfo, setItemInfo] = useState(itemData);

  const navigate = useNavigate();
  const navigateToSeeMorePage = () => {
    navigate(`/productsPage/${itemInfo.id}`, { state: itemInfo });
  };
  const dispatch = useDispatch();
  const addItemToCart = () => {
    console.log('carditem: ');
    console.log(itemInfo);
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: itemInfo });
  };

  return (
    <div className='card-item-cont'>
      <div className='img-cont'>
        <div className='img-cont__inner'>
          <img
            src={itemInfo.image}
            alt='img'
            className='img-cont__inner__img'
          />
        </div>
      </div>
      <div className='info-cont'>
        <div className='info-cont__product-name-cont'>{itemInfo.title}</div>
        <div className='info-cont__product-price-cont'>{`$ ${itemInfo.price}`}</div>
      </div>
      <div className='functionality'>
        <button
          className='functionality__see-more-btn'
          onClick={navigateToSeeMorePage}
        >
          See more
        </button>
        <div className='functionality__add-and-qnty-functionality-cont'>
          <input
            className='functionality__add-and-qnty-functionality-cont__qnty-input'
            type='number'
            min='1'
            value={itemInfo.quantity}
            onChange={(e) => {
              setItemInfo({ ...itemInfo, quantity: parseInt(e.target.value) });
            }}
          />
          <button
            className='functionality__add-and-qnty-functionality-cont__add-to-cart-btn'
            onClick={() => {
              addItemToCart();
              setItemInfo({ ...itemInfo, quantity: 1 });
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
