import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='nav-cont'>
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
        <button className='nav-functionality-cont__cart-btn'>Cart</button>
      </div>
    </div>
  );
};

export default Nav;
