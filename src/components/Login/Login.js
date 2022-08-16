import React from 'react';
import './Login.scss';
import Form from './Form/Form';

function Login({ setCookie }) {
  
  return (
    <div className="login">
      <Form setCookie={setCookie}/>
    </div>
  );
}

export default Login;