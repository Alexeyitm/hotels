import React from 'react';
import './Content.scss';
import Carousel from './Carousel/Carousel';
import Hotels from './Hotels/Hotels';

function Content() {
  return (
    <div className="content">
      <h2 className="content__title">
        Отели:
        <span className="content__place">Москва</span>
        <span className="content__date">07 июля 2020</span>
        <Carousel/>
        <p className="content__count">
          Добавлено в Избранное:&nbsp;
          <span className="content__count-number">3 отеля</span>
        </p>
        <Hotels/>
      </h2>
    </div>
  );
}

export default Content;