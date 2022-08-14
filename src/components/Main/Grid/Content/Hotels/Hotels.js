import React from 'react';
import './Hotels.scss';
import Hotel from './Hotel/Hotel';

function Hotels({ cardsState, dateState }) {
  
  return (
    <div className="hotels">
      {cardsState?.map(card =>
        <Hotel
          key={card.hotelId}
          card={card}
          dateState={dateState}
        />
      )}
    </div>
  );
}

export default Hotels;