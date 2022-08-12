import React from 'react';
import './Grid.scss';
import Search from './Search/Search';
import Favorites from './Favorites/Favorites';
import Result from './Result/Result';

function Grid() {
  return (
    <div className="grid">
      <Search/>
      <Favorites/>
      <Result/>
    </div>
  );
}

export default Grid;