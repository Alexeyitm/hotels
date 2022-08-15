const monthRU = [
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Октября',
  'Ноября', 
  'Декабря'
]

const monthEN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]


const makeDate = (date, lang) => {
  const dateArr = date.split('-').map(el => +el[0] ? el : el[1]);
  // eslint-disable-next-line default-case
  switch(lang) {
    case 'ru':
      return dateArr[2] + ' ' + monthRU[+dateArr[1] - 1] + ' ' + dateArr[0]
    case 'en':
      return dateArr[2] + ' ' + monthEN[+dateArr[1] - 1] + ', ' + dateArr[0]
  }
}

export default makeDate;