import React from 'react'
import { useContext } from 'react';
import AppContext from '../context/appContext';
import style from '../style/Header.module.css';
import logo from '../images/logo.svg';
import user from '../images/user-logo.svg';

export default function Header() {
  const { email } = useContext(AppContext);
  return (
    <header className={ style.container }>
      <section className={ style['container-logo'] }>
        <img src={ logo } alt="logo" className={ style.logo } />
        <h1>TODO'S</h1>
      </section>
      <section className={ style.user }>
        <img src={ user } alt="user-logo" />
        <p data-testid="email-field">{email}</p>
      </section>
  </header>
  )
}
