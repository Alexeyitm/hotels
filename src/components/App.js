import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import { useCookies } from 'react-cookie';
import './App.scss';
import { api } from '../api/Api'
import Login from './Login/Login';
import Main from './Main/Main';
import makeValidDate from '../scripts/makeValidDate';

function App() {

  const getHotels = (location, checkIn, days) => {
    let dateArr = checkIn.split('-');
    let date = new Date(dateArr[0], dateArr[1] - 1, dateArr[2]);
    let newDate = new Date(date.setDate(date.getDate() + Number(days)));
    let checkOut = makeValidDate(newDate);
    api
      .getHotels(location, checkIn, checkOut)
      .then(res => setCardsState(res))
      .then(res => setDateState({location, checkIn, days}))
      .catch((err) => console.log(err))
  }

  const [cookies, setCookie, removeCookie] = useCookies(['auth']);;
  const [formSearchState, setFormSearchState] = useState({
    location: "Москва",
    checkIn: makeValidDate(new Date()),
    days: 1,
  });
  const [dateState, setDateState] = useState({
    location: "",
    checkIn: "",
    days: "",
  });
  const [cardsState, setCardsState] = useState();
  const [sortState, setSortState] = useState({ rating: 1, price: 0});

  useEffect(() => {
    getHotels(formSearchState.location, formSearchState.checkIn, formSearchState.days)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route
            path='login'
            element={
              cookies.auth ? 
              <Navigate to="/"/> : 
              <Login
                setCookie={setCookie}
              />}
          />
          <Route 
            path='/'
            element={
              cookies.auth ? 
              <Main
                formSearchState={formSearchState}
                setFormSearchState={setFormSearchState}
                sortState={sortState}
                setSortState={setSortState}
                getHotels={getHotels}
                cardsState={cardsState}
                dateState={dateState}
                removeCookie={removeCookie}
              /> :
              <Navigate to="login"/>
            }
          />
          <Route
            path="*"
            element={<Navigate to="login" replace/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
