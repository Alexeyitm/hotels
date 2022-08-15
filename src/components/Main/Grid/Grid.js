import React from 'react';
import './Grid.scss';
import Search from './Search/Search';
import Favorites from './Favorites/Favorites';
import Content from './Content/Content';

function Grid({
  formSearchState,
  setFormSearchState,
  sortState,
  setSortState,
  getHotels,
  cardsState,
  dataState,
  favoriteCardsState,
  setFavoriteCardsState
}) {
  return (
    <div className="grid">
      <Search 
        formSearchState={formSearchState}
        setFormSearchState={setFormSearchState}
        getHotels={getHotels}
      />
      <Favorites
        sortState={sortState}
        setSortState={setSortState}
        favoriteCardsState={favoriteCardsState}
      />
      <Content
        cardsState={cardsState}
        dataState={dataState}
        favoriteCardsState={favoriteCardsState}
        setFavoriteCardsState={setFavoriteCardsState}
      />
    </div>
  );
}

export default Grid;
