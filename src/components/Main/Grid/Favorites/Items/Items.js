import React from 'react';
import './Items.scss';
import Item from './Item/Item';

function Items({
  favoriteCardsState,
  setFavoriteCardsState
}) {
  return (
    <div className="items">
      {favoriteCardsState.map(card =>
        <Item
          key={card.hotelId}
          card={card}
          favoriteCardsState={favoriteCardsState}
          setFavoriteCardsState={setFavoriteCardsState}
        />
      )}
    </div>
  );
}

export default Items;