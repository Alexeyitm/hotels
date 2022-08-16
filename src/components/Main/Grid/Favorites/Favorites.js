import React from 'react';
import './Favorites.scss';
import Items from './Items/Items';

function Favorites({
  sortState,
  setSortState,
  favoriteCardsState,
  setFavoriteCardsState
}) {

  const handleClickRating = () => {
    setSortState({rating: !sortState.rating})
  }

  const handleClickPrice = () => {
    setSortState({price: !sortState.price})
  }
  
  return (
    <div className="favorites">
      <h2 className="favorites__title">Избранное</h2>
      <div className="favorites__buttons">
        <button
          className={"favorites__button favorites__button_rating" + (sortState.rating !== undefined ? " favorites__button_active" : "")}
          onClick={handleClickRating}
        >
          Рейтинг
          <div
            className={"favorites__sort favorites__sort_default" + (sortState.rating === true ?
              " favorites__sort_high" : sortState.rating === false ? " favorites__sort_low" : "")}
          ></div>
        </button>
        <button 
          className={"favorites__button favorites__button_price" + (sortState.price !== undefined ? " favorites__button_active" : "")}
          onClick={handleClickPrice}
        >
          Цена
          <div
            className={"favorites__sort favorites__sort_default" + (sortState.price === true ? 
              " favorites__sort_high" : sortState.price === false ? " favorites__sort_low" : "")}
          ></div>
        </button>
      </div>
      <Items
        sortState={sortState}
        setSortState={setSortState}
        favoriteCardsState={favoriteCardsState}
        setFavoriteCardsState={setFavoriteCardsState}
      />
    </div>
  );
}

export default Favorites;