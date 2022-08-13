import React from 'react';
import './Content.scss';

function Content() {
  return (
    <div className="content">
      <h2 className="content__title">
        Отели:
        <span className="content__place">Москва</span>
        <span className="content__date">07 июля 2020</span>
      </h2>
      <Carousel/>
    </div>
  );
}

export default Content;