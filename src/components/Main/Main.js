import React from 'react';
import './Main.scss';
import Header from './Header/Header';
import Grid from './Grid/Grid';

function Main({
  formSearchState,
  setFormSearchState,
  sortState,
  setSortState,
  getHotels,
  cardsState,
  dataState,
  removeCookie,
  favoriteCardsState,
  setFavoriteCardsState
}) {
  return (
    <div className="main">
      <Header
        removeCookie={removeCookie}
      />
      <Grid
        formSearchState={formSearchState}
        setFormSearchState={setFormSearchState}
        sortState={sortState}
        setSortState={setSortState}
        getHotels={getHotels}
        cardsState={cardsState}
        dataState={dataState}
        favoriteCardsState={favoriteCardsState}
        setFavoriteCardsState={setFavoriteCardsState}
      />
    </div>
  );
}

export default Main;