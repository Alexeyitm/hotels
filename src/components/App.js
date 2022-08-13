import {useState} from 'react';
import './App.scss';
import Login from './Login/Login';
import Main from './Main/Main';

function App() {

  const initialState = {
    location: "Москва",
    date: 
      (new Date().getMonth()+1).length === 1 ? 
      `${new Date().getFullYear()}-${(new Date().getMonth()+1)}-${new Date().getDate()}` :
      `${new Date().getFullYear()}-0${(new Date().getMonth()+1)}-${new Date().getDate()}`,
    days: 1,
  };

  const [sortState, setSortState] = useState({ rating: 1, price: 0})

  return (
    <div className="app">
      <Login/>
      <Main
        initialState={initialState}
        sortState={sortState}
        setSortState={setSortState}
      />
    </div>
  );
}

export default App;
