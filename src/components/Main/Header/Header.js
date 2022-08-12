import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <button className="header__button">
        <div className="header__exit"></div>
        Выйти
      </button>
    </header>
  );
}

export default Header;