import { useState } from 'react';
import './App.scss';
import { api } from '../api/Api'
import Login from './Login/Login';
import Main from './Main/Main';

function App() {

  const getValidDate = (date) => {
    let validDate = date.getFullYear();

    if ((date.getMonth() + 1).length === 1) {
      validDate += "-" + (date.getMonth() + 1)
    } else {
      validDate += "-0" + (date.getMonth() + 1)
    }

    if (date.getDate().length === 1) {
      validDate += "-0" + (date.getDate())
    } else {
      validDate += "-" + (date.getDate())
    }

    return validDate;
  }

  const [formSearchState, setFormSearchState] = useState({
    location: "Москва",
    checkIn: getValidDate(new Date()),
    days: 1,
  });
  const [cardsState, setCardsState] = useState({});
  const [sortState, setSortState] = useState({ rating: 1, price: 0});

  const getHotels = (location, checkIn, days) => {
    let dateArr = checkIn.split('-')
    let date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
    let newDate = new Date(date.setDate(date.getDate() + Number(days)));

    const checkOut = getValidDate(newDate);

    api
      .getHotels(location, checkIn, checkOut)
      .then(res => setCardsState(res))
  }

  getHotels(formSearchState.location, formSearchState.checkIn, formSearchState.days)

  return (
    <div className="app">
      <Login/>
      <Main
        formSearchState={formSearchState}
        setFormSearchState={setFormSearchState}
        sortState={sortState}
        setSortState={setSortState}
        getHotels={getHotels}
        cardsState={cardsState}
      />
    </div>
  );
}

export default App;
