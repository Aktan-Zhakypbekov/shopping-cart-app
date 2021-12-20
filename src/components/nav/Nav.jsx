import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-cont'>
      <div className='nav-logo-cont'>LOGO</div>
      <div className='nav-functionality-cont'>
        <div className='nav-functionality-cont__nav-link'>Homepage</div>
        <div className='nav-functionality-cont__nav-link'>Products</div>
        <div className='nav-functionality-cont__nav-link'>Contacts</div>
        <button className='nav-functionality-cont__cart-btn'>Cart</button>
      </div>
    </div>
  );
};

export default Nav;
