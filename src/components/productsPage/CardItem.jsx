import React from 'react';

const CardItem = ({ itemData }) => {
  return (
    <div className='card-item-cont'>
      <div className='img-cont'>
        <div className='img-cont__inner'>
          <img
            src={itemData.image}
            alt='img'
            className='img-cont__inner__img'
          />
        </div>
      </div>
      <div className='info-cont'>
        <div className='info-cont__product-name-cont'>{itemData.title}</div>
        <div className='info-cont__product-price-cont'>{`$ ${itemData.price}`}</div>
      </div>
      <div className='functionality'>
        <button className='functionality__see-more-btn'>see more</button>
        <div className='functionality__add-and-qnty-functionality-cont'>
          <input
            className='functionality__add-and-qnty-functionality-cont__qnty-input'
            type='number'
          />
          <button className='functionality__add-and-qnty-functionality-cont__add-to-cart-btn'>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
