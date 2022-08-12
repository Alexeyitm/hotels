import React from 'react';
import './Form.scss';

function Form() {
  return (
    <form className="form" name="login" id="login">
      <h2 className="form__title">Simple Hotel Check</h2>
      <label className="form__label" htmlFor="email">Логин</label>
      <input className="form__input" type="email" id="email" name="email"></input>
      <label className="form__label" htmlFor="password">Пароль</label>
      <input className="form__input" type="password" id="password" name="password"></input>
      <button className="form__button" type="submit" form="login">Войти</button>
    </form>
  );
}

export default Form;