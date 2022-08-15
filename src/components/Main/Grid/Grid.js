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
  dataState
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
      />
      <Content
        cardsState={cardsState}
        dataState={dataState}
      />
    </div>
  );
}

export default Grid;
