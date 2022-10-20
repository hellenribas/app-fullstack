import React from 'react'
import { useState } from 'react';
import style from './style/Login.module.css';


export default function Login() {
  const [email, setEmail]  = useState('');
  const [password, setPassword]  = useState('');
  const [isDisabled, setDisabled]  = useState(true);
  

  const handleEmail = ({ target }) => {
    setEmail(target.value)
    validate()
  }

  const handlePassword = ({ target }) => {
    setPassword(target.value)
    validate()
  }

  const validate = () => {
    const { email, password } = this.state;
    const numbersix = 6;
    if (email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    && password.length >= numbersix) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }
  return (
    <main className={ style.main }>
      <form className={ style.form }>
        <label htmlFor="email">
          EMAIL
          <input
            type="email"
            id="email"
            value={ email }
            data-testid="email-input"
            onChange={ handleEmail }
            className={ style.user }
          />
        </label>
        <label htmlFor="password">
          SENHA
          <input
            type="password"
            value={ password }
            data-testid="password-input"
            id="password"
            onChange={ handlePassword }
            className={ style.password }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          className={ style.button }
        >
          ENTRAR

        </button>
      </form>
    </main>
  );
}
