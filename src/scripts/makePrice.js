const makePrice = (num) => {
  return Math.round(num).toLocaleString('ru') + ' ₽';
}

export default makePrice;