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
  cardsState
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
      />
    </div>
  );
}

export default Grid;
