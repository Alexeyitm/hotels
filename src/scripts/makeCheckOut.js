import makeValidDate from "./makeValidDate";

const makeCheckOut = (checkIn, days) => {
  const dateArr = checkIn.split('-');
  const date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
  const newDate = new Date(date.setDate(date.getDate() + Number(days)));
  return makeValidDate(newDate);
}

export default makeCheckOut;