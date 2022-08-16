const highRating = (cards) => {
  return (cards.sort(function (a, b) {
    if (a.props.card.stars < b.props.card.stars) {
      return 1;
    }
    if (a.props.card.stars > b.props.card.stars) {
      return -1;
    }
    return 0;
  }))
}

const lowRating = (cards) => {
  return (cards.sort(function (a, b) {
    if (a.props.card.stars > b.props.card.stars) {
      return 1;
    }
    if (a.props.card.stars < b.props.card.stars) {
      return -1;
    }
    return 0;
  }))
}

const highPrice = (cards) => {
  return (cards.sort(function (a, b) {
    if (a.props.card.priceAvg < b.props.card.priceAvg) {
      return 1;
    }
    if (a.props.card.priceAvg > b.props.card.priceAvg) {
      return -1;
    }
    return 0;
  }))
}

const lowPrice = (cards) => {
  return (cards.sort(function (a, b) {
    if (a.props.card.priceAvg > b.props.card.priceAvg) {
      return 1;
    }
    if (a.props.card.priceAvg < b.props.card.priceAvg) {
      return -1;
    }
    return 0;
  }))
}

export { highRating, lowRating, highPrice, lowPrice }