import React from 'react';
import './Grid.scss';
import Search from './Search/Search';
import Favorites from './Favorites/Favorites';
import Content from './Content/Content';

function Grid() {
  return (
    <div className="grid">
      <Search/>
      <Favorites/>
      <Content/>
    </div>
  );
}

export default Grid;
