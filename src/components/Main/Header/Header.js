import React from 'react';
import './Header.scss';

function Header({ removeCookie }) {

  const handleClickExit = () => {
    removeCookie('auth')
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