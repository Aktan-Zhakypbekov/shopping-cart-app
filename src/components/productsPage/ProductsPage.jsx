import React from 'react';
import './ProductsPage.css';
import List from './List';
import { useEffect, useState } from 'react';

const ProductsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      });
  });

  return (
    <div className='products-page-cont'>
      <List data={data} />
    </div>
  );
};

export default ProductsPage;
