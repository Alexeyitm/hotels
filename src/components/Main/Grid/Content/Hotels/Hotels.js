import React from 'react';
import './Hotels.scss';
import Hotel from './Hotel/Hotel';

function Hotels({ cardsState, date, days }) {
  
  return (
    <div className="hotels">
      {cardsState?.map(card =>
        <Hotel
          key={card.hotelId}
          card={card}
          date={date}
          days={days}
        />
      )}
    </div>
  );
}

export default Hotels;