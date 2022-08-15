import React from 'react';
import './Items.scss';
import Item from './Item/Item';

function Items({ favoriteCardsState }) {
  return (
    <div className="items">
      {favoriteCardsState.map(card =>
        <Item
          key={card.hotelId}
          card={card}
        />
      )}
    </div>
  );
}

export default Items;