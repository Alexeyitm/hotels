import React from 'react';
import './Items.scss';
import Item from './Item/Item';
import { highRating, lowRating, highPrice, lowPrice } from '../../../../.././scripts/sortCards'

function Items({
  sortState,
  setSortState,
  favoriteCardsState,
  setFavoriteCardsState
}) {

  const cards = favoriteCardsState.map(card =>
    <Item
      key={card.hotelId}
      card={card}
      favoriteCardsState={favoriteCardsState}
      setFavoriteCardsState={setFavoriteCardsState}
    />
  )
  
  return (
    <div className="items">
      {sortState.rating === true ? highRating(cards) :
      sortState.rating === false ? lowRating(cards) :
      sortState.price === true ? highPrice(cards) :
      sortState.price === false ? lowPrice(cards) :
      ''}
    </div>
  );
}

export default Items;