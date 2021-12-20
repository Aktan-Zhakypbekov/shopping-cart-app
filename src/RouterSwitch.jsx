import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Homepage from './components/homepage/Homepage';
import ProductsPage from './components/productsPage/ProductsPage';
import SeeMorePage from './components/seeMorePage/SeeMorePage';
import ContactsPage from './components/contactsPage/ContactsPage';
import Footer from './components/footer/Footer';

const RouterSwitch = () => {
  return (
    <BrowserRouter>
      <div className='main-cont'>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/productsPage' element={<ProductsPage />} />
          <Route path='/productsPage/:id' element={<SeeMorePage />} />
          <Route path='/contactsPage' element={<ContactsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouterSwitch;
