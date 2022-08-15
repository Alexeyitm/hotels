import React from 'react';
import './Content.scss';
import Carousel from './Carousel/Carousel';
import Hotels from './Hotels/Hotels';
import makeDate from '../../../../scripts/makeDate';

function Content({ cardsState, dataState }) {

  const date = makeDate(dataState.checkIn, 'ru');

  return (
    <div className="content">
      <h2 className="content__title">
        Отели:
        <span className="content__place">{dataState.location}</span>
        <span className="content__date">{date}</span>
        <Carousel/>
        <p className="content__count">
          Добавлено в Избранное:&nbsp;
          <span className="content__count-number">3 отеля</span>
        </p>
        <Hotels
          cardsState={cardsState}
          date={date}
          days={dataState.days}
        />
      </h2>
    </div>
  );
}

export default Content;