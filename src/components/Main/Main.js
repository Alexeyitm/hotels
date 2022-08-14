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
  dateState
}) {
  return (
    <div className="main">
      <Header/>
      <Grid
        formSearchState={formSearchState}
        setFormSearchState={setFormSearchState}
        sortState={sortState}
        setSortState={setSortState}
        getHotels={getHotels}
        cardsState={cardsState}
        dateState={dateState}
      />
    </div>
  );
}

export default Main;