import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  function navigateToProductsPage() {
    navigate('/productsPage');
  }
  return (
    <div className='homepage-cont'>
      <div className='content-cont'>
        <div className='content-cont__text-cont'>
          <div className='content-cont__text-cont__title'>
            Title Of the Shop
          </div>
          <div className='content-cont__text-cont__description'>
            Description bla bla bla bla bla bla cjdsnbhsdbhj bbb nisbshfb si
            sbihb b sdkj sb isb di
          </div>
          <button
            className='content-cont__text-cont__shop-now-btn'
            onClick={navigateToProductsPage}
          >
            Shop Now
          </button>
        </div>
        <div className='content-cont__img-cont'>
          <img
            src='https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            alt='img'
            className='content-cont__img-cont__img'
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
