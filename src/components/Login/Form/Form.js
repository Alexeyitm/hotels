import { useState } from 'react';
import './Form.scss';
import EmailValidator from 'email-validator';

function Form({ setCookie }) {

  const [userDataState, setUserDataState] = useState({email: '', password: ''});
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const handleChangeEmail = (e) => {
    setUserDataState({...userDataState, email: e.target.value})
    EmailValidator.validate(e.target.value) ? setValidEmail(true) : setValidEmail(false);
  }

  const handleChangePassword = (e) => {
    setUserDataState({...userDataState, password: e.target.value})
    e.target.value.length < 8 ? setValidPassword(false) : setValidPassword(true);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setCookie('auth', true);
  }

  return (
    <form className="form" name="login" id="login">
      <h2 className="form__title">Simple Hotel Check</h2>

      <label
        className={"form__label" + (!validEmail ? " form__label_invalid" : "")}
        htmlFor="email"
      >Логин
        <span className={"form__message"  + (!validEmail ? " form__message_invalid" : "")}>
          Введите корректный email
        </span>
      </label>
      <input
        className={"form__input" + (!validEmail ? " form__input_invalid" : "")}
        type="email" id="email"
        name="email"
        onChange={handleChangeEmail}
      >
      </input>

      <label
        className={"form__label" + (!validPassword ? " form__label_invalid" : "")}
        htmlFor="password"
      >Пароль
        <span className={"form__message"  + (!validPassword ? " form__message_invalid" : "")}>
          Минимальная длина пароля - 8 символов
        </span>
      </label>
      <input
        className={"form__input" + (!validPassword ? " form__input_invalid" : "")}
        type="password"
        id="password"
        name="password"
        onChange={handleChangePassword}
      >
      </input>
      
      <button
        className="form__button"
        type="submit"
        form="login"
        onClick={handleLogin}
        disabled={(validEmail && validPassword && userDataState.email && userDataState.password) ? false : true}
      >Войти
      </button>
    </form>
  );
}

export default Form;