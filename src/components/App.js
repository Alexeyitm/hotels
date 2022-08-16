import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useCookies } from 'react-cookie';
import './App.scss';
import { api } from '../api/Api'
import Login from './Login/Login';
import Main from './Main/Main';
import makeValidDate from '../scripts/makeValidDate';
import makeCheckOut from '../scripts/makeCheckOut';

function App() {

  const getHotels = (location, checkIn, days) => {
    const checkOut = makeCheckOut(checkIn, days);
    api
      .getHotels(location, checkIn, checkOut)
      .then(res => setCardsState(res))
      .then(() => setDataState({location, checkIn, days}))
      .catch((err) => console.log(err))
  }

  const [cookies, setCookie, removeCookie] = useCookies(['auth']);;
  const [formSearchState, setFormSearchState] = useState({
    location: "Москва",
    checkIn: makeValidDate(new Date()),
    days: 1,
  });
  const [dataState, setDataState] = useState({
    location: "",
    checkIn: "",
    days: "",
  });
  const [cardsState, setCardsState] = useState();
  const [favoriteCardsState, setFavoriteCardsState] = useState([]);
  const [sortState, setSortState] = useState({ rating: 1, price: 0});

  useEffect(() => {
    getHotels(formSearchState.location, formSearchState.checkIn, formSearchState.days)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
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
              dataState={dataState}
              removeCookie={removeCookie}
              favoriteCardsState={favoriteCardsState}
              setFavoriteCardsState={setFavoriteCardsState}
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
  );
}

export default App;
