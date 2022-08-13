import React from 'react';
import './Grid.scss';
import Search from './Search/Search';
import Favorites from './Favorites/Favorites';
import Content from './Content/Content';

function Grid({ initialState, sortState, setSortState }) {
  return (
    <div className="grid">
      <Search initialState={initialState}/>
      <Favorites
        sortState={sortState}
        setSortState={setSortState}
      />
      <Content/>
    </div>
  );
}

export default Grid;
