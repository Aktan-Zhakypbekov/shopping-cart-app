import React, { useState } from 'react';
import './SeeMorePage.css';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const SeeMorePage = () => {
  let location = useLocation();

  const [itemInfo2, setItemInfo2] = useState(location.state);

  const dispatch = useDispatch();
  const addItemToCart2 = () => {
    console.log('carditem2: ');
    console.log(itemInfo2);
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: itemInfo2 });
  };

  return (
    <div className='see-more-page-cont'>
      <div className='see-more-page-cont__content-cont'>
        <div className='see-more-page-cont__content-cont__img-cont'>
          <div className='see-more-page-cont__content-cont__img-cont__inner'>
            <img
              src={location.state.image}
              alt='img'
              className='see-more-page-cont__content-cont__img-cont__inner__img'
            />
          </div>
        </div>
        <div className='see-more-page-cont__content-cont__info-cont'>
          <div className='info'>
            <div className='see-more-page-cont__content-cont__info-cont__title'>
              {location.state.title}
            </div>
            <div className='see-more-page-cont__content-cont__info-cont__description'>
              {location.state.description}
            </div>
            <div className='see-more-page-cont__content-cont__info-cont__price'>
              {`Price: $${location.state.price}`}
            </div>
          </div>
          <div className='see-more-page-cont__content-cont__info-cont__add-and-qnty-functionality'>
            <input
              type='number'
              className='see-more-page-cont__content-cont__info-cont__add-and-qnty-functionality__qnty-input'
              min='1'
              value={itemInfo2.quantity}
              onChange={(e) => {
                setItemInfo2({ ...itemInfo2, quantity: e.target.value });
              }}
            />
            <button
              className='see-more-page-cont__content-cont__info-cont__add-and-qnty-functionality__add-to-cart-btn'
              onClick={() => {
                addItemToCart2();
                setItemInfo2({ ...itemInfo2, quantity: 1 });
              }}
            >
              Add to cart
            </button>
          </div>
          <div className='back-link-cont'>
            <Link to='/productsPage'>
              <div className='see-more-page-cont__content-cont__info-cont__back-link'>
                Back
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeMorePage;
