import React from 'react';
import './Hotel.scss';

function Hotel({ card, dateState }) {
  return (
    <div  className="hotel">

      <div className="hotel__logo"></div>

      <div className="item item_main">
        <h3 className="item__title">{card.hotelName}</h3>
        <div className="item__like item__like_main"></div>
        <p className="item__date item__date_main">{dateState.checkIn} - {dateState.days} день</p>
        <div
          className={"item__stars" + (card.stars === 5 ? " item__stars_five" : 
          card.stars === 4 ? " item__stars_four" :
          card.stars === 3 ? " item__stars_three" : 
          card.stars === 2 ? " item__stars_two" : 
          card.stars === 1 ? " item__stars_one" : "")}
        ></div>
        <p className="item__price">
          Price:
          <span className="item__number">{card.priceAvg} ₽</span>
        </p>
      </div>

    </div>
  );
}

export default Hotel;