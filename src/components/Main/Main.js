import React from 'react';
import './Main.scss';
import Header from './Header/Header';
import Grid from './Grid/Grid';

function Main() {
  return (
    <div className="main">
      <Header/>
      <Grid/>
    </div>
  );
}

export default Main;