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
        let newArr = response.map((elem) => {
          elem.quantity = 1;
          return elem;
        });
        setData(newArr);
      });
  }, []);

  return (
    <div className='products-page-cont'>
      <List data={data} />
    </div>
  );
};

export default ProductsPage;
