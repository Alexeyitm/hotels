import React from 'react';
import './Hotels.scss';
import Hotel from './Hotel/Hotel';

function Hotels({
  favoriteCardsState,
  setFavoriteCardsState,
  cardsState,
  date,
  days
}) {
  
  return (
    <div className="hotels">
      {cardsState?.map(card =>
        <Hotel
          key={card.hotelId}
          card={card}
          date={date}
          days={days}
          favoriteCardsState={favoriteCardsState}
          setFavoriteCardsState={setFavoriteCardsState}
        />
      )}
    </div>
  );
}

export default Hotels;