import { useState, useEffect } from 'react';
import './Hotel.scss';
import makePrice from '../../../../../.././scripts/makePrice';
const plural = require('plural-ru');

function Hotel({
  card,
  date,
  days,
  favoriteCardsState,
  setFavoriteCardsState,
}) {

  const [likeState, setLikeState] = useState(false);

  // eslint-disable-next-line
  useEffect(() => {
    setLikeState(false);
    checkRenderLike();
  });

  const checkRenderLike = () => {
    favoriteCardsState.forEach(favoriteCard => {
      if (favoriteCard.hotelId === card.hotelId) {
        setLikeState(true);
      }
    })
  }

  const addFavoriteCard = () => {
    setLikeState(true);
    card.date = date[1];
    card.days = days;
    setFavoriteCardsState([...favoriteCardsState, card]);
  }

  const removeFavoriteCard = () => {
    setLikeState(false);
    setFavoriteCardsState(favoriteCardsState.filter(favoriteCard => favoriteCard.hotelId !== card.hotelId));
  }
  
  const handleClickLike = () => {
    !likeState ? addFavoriteCard() : removeFavoriteCard();
  }

  return (
    <div  className="hotel">
      <div className="hotel__logo"></div>
      <div className="item item_main">
        <h3 className="item__title">{card.hotelName}</h3>
        <div 
          className={"item__like" + (likeState ? "" : " item__like_inactive")}
          onClick={handleClickLike}
        >
        </div>
        <p className="item__date item__date_main">
          {date[0]} - {plural(days, "%d день", "%d дня", "%d дней")}
        </p>
        <div
          className={"item__stars" + (card.stars === 5 ? " item__stars_five" : 
          card.stars === 4 ? " item__stars_four" :
          card.stars === 3 ? " item__stars_three" : 
          card.stars === 2 ? " item__stars_two" : 
          card.stars === 1 ? " item__stars_one" : "")}
        ></div>
        <p className="item__price">
          Price:
          <span className="item__number">{(days > 0) ? makePrice(card.priceAvg) : "0 ₽"}</span>
        </p>
      </div>

    </div>
  );
}

export default Hotel;