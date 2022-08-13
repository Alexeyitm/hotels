import React from 'react';
import './Item.scss';

function Item() {
  return (
    <div className="item">
      <h3 className="item__title">Moscow Marriott Grand Hotel</h3>
      <div className="item__like"></div>
      <p className="item__date">28 June, 2020 - 1 день</p>
      <div className="item__stars"></div>
      <p className="item__price">
        Price:
        <span className="item__number">23 924 ₽</span>
      </p>
    </div>
  );
}

export default Item;