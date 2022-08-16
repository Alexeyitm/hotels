import React from 'react';
import './Item.scss';
import makePrice from '../../../../../.././scripts/makePrice';
const plural = require('plural-ru');

function Item({
  card,
  favoriteCardsState,
  setFavoriteCardsState
}) {

  const handleClickLike = () => {
    setFavoriteCardsState(favoriteCardsState.filter(favoriteCard => favoriteCard.hotelId !== card.hotelId));
  }

  return (
    <div className="item">
      <h3 className="item__title">
        {card.hotelName}
      </h3>
      <div 
        className="item__like"
        onClick={handleClickLike}
      >
      </div>
      <p className="item__date">
        {card.date} - {plural(card.days, "%d день", "%d дня", "%d дней")}
      </p>
      <div className="item__stars"></div>
      <p className="item__price">
        Price:
        <span className="item__number">
          {makePrice(card.priceAvg)}
        </span>
      </p>
    </div>
  );
}

export default Item;