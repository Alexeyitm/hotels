import React from 'react';
import './Favorites.scss';

function Favorites() {
  return (
    <div className="favorites">
      <h2 className="favorites__title">Избранное</h2>
      <div className="favorites__buttons">
        <button className="favorites__button favorites__button_rating">
          Рейтинг <div className="favorites__sort"></div>
        </button>
        <button className="favorites__button favorites__button_price">
          Цена <div className="favorites__sort"></div>
          </button>
      </div>
    </div>
  );
}

export default Favorites;