import React from 'react';
import './Hotel.scss';

function Hotel() {
  return (
    <div  className="hotel">

      <div className="hotel__logo"></div>

      <div className="item item_main">
        <h3 className="item__title">Moscow Marriott Grand Hotel</h3>
        <div className="item__like item__like_main"></div>
        <p className="item__date item__date_main">28 June, 2020 - 1 день</p>
        <div className="item__stars"></div>
        <p className="item__price">
          Price:
          <span className="item__number">23 924 ₽</span>
        </p>
      </div>

    </div>
  );
}

export default Hotel;