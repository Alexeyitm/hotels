import React from 'react';
import './Favorites.scss';
import Items from './Items/Items';

function Favorites({ sortState, setSortState }) {

  const handleClickRating = () => {
    setSortState({rating: sortState.rating += 1, price: 0})
  }

  const handleClickPrice = () => {
    setSortState({rating: 0, price: sortState.price += 1})
  }
  
  return (
    <div className="favorites">
      <h2 className="favorites__title">Избранное</h2>
      <div className="favorites__buttons">
        <button
          className={"favorites__button favorites__button_rating" + (sortState.rating ? " favorites__button_active" : "")}
          onClick={handleClickRating}
        >
          Рейтинг
          <div
            className={"favorites__sort favorites__sort_default" + (sortState.rating % 2 ? " favorites__sort_high" : sortState.rating === 0 ? "" : " favorites__sort_low")}
          ></div>
        </button>
        <button 
          className={"favorites__button favorites__button_price" + (sortState.price ? " favorites__button_active" : "")}
          onClick={handleClickPrice}
        >
          Цена
          <div
            className={"favorites__sort favorites__sort_default" + (sortState.price % 2 ? " favorites__sort_high" : sortState.price === 0 ? "" : " favorites__sort_low")}
          ></div>
        </button>
      </div>
      <Items/>
    </div>
  );
}

export default Favorites;