import {useState} from 'react';
import './Hotel.scss';
import makePrice from '../../../../../.././scripts/makePrice';

function Hotel({ card, date, days }) {

  const plural = require('plural-ru');
  const [likeState, setLikeState] = useState(false);

  const handleClickLike = () =>{
    setLikeState(!likeState);
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
          {date} - {plural(days, "%d день", "%d дня", "%d дней")}
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