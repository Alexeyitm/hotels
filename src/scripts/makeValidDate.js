const makeValidDate = (date) => {
  let validDate = date.getFullYear();
  if ((date.getMonth() + 1).length === 1) {
    validDate += "-" + (date.getMonth() + 1)
  } else {
    validDate += "-0" + (date.getMonth() + 1)
  }
  if (String(date.getDate()).length === 1) {
    validDate += "-0" + (date.getDate())
  } else {
    validDate += "-" + (date.getDate())
  }
  return validDate;
}

export default makeValidDate;