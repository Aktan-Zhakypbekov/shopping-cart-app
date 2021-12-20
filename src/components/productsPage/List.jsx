import React from 'react';
import CardItem from './CardItem';

const List = ({ data }) => {
  return (
    <div className='list-cont'>
      {data.map((elem) => {
        return <CardItem itemData={elem} key={elem.id} />;
      })}
    </div>
  );
};

export default List;
