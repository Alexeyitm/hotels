import React from 'react';
import './Content.scss';
import Carousel from './Carousel/Carousel';
import Hotels from './Hotels/Hotels';
import makeDate from '../../../../scripts/makeDate';
const plural = require('plural-ru');

function Content({
  cardsState,
  dataState,
  favoriteCardsState,
  setFavoriteCardsState
}) {

  const date = [makeDate(dataState.checkIn, 'ru'), makeDate(dataState.checkIn, 'en')]

  return (
    <div className="content">
      <h2 className="content__title">
        Отели:
        <span className="content__place">
          {dataState.location}
        </span>
        <span className="content__date">
          {date[0]}
        </span>
      </h2>
      <Carousel/>
      <p className="content__count">
        Добавлено в Избранное:&nbsp;
        <span>
          <span className="content__number">
            {favoriteCardsState.length}
          </span>
          {plural(favoriteCardsState.length, " отель", " отеля", " отелей")}
        </span>
      </p>
      <Hotels
        favoriteCardsState={favoriteCardsState}
        setFavoriteCardsState={setFavoriteCardsState}
        cardsState={cardsState}
        date={date}
        days={dataState.days}
      />
    </div>
  );
}

export default Content;