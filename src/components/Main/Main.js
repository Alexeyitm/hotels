import React from 'react';
import './Main.scss';
import Header from './Header/Header';
import Grid from './Grid/Grid';

function Main({ initialState, sortState, setSortState }) {
  return (
    <div className="main">
      <Header/>
      <Grid
        initialState={initialState}
        sortState={sortState}
        setSortState={setSortState}
      />
    </div>
  );
}

export default Main;