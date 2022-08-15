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
  removeCookie
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
      />
    </div>
  );
}

export default Main;