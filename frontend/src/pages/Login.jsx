import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import appContext from '../context/appContext';
import style from '../style/Form.module.css';

export default function Login() {
  const {email, handleEmail, handlePassword, password, isDisabled, login,error} = useContext(appContext);

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
          onClick={ login }
        >
          ENTRAR

        </button>
        <p>
          Ainda não tem cadastro?
        <Link to="/register">Cadastre-se</Link>
        </p>
      </form>
        { error && <p className={ style.error }>{error}</p> }
    </main>
  );
}
