import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

function Header() {

  const navigate = useNavigate();

  const handleClickExit = () => {
    //navigate('/login');
    localStorage.removeItem('user');
    console.log(localStorage.user)
  }

  return (
    <header className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <button 
        className="header__button"
        onClick={handleClickExit}
      >
        <div className="header__exit"></div>
        Выйти
      </button>
    </header>
  );
}

export default Header;