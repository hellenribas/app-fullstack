import React from 'react'
import { useContext } from 'react';
import AppContext from '../context/appContext';
import style from '../style/Header.module.css';
import logo from '../images/logo.png';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

export default function Header() {
  const { email } = useContext(AppContext);
  return (
    <header className={ style.container }>
      <section className={ style['container-logo'] }>
        <img src={ logo } alt="logo" className={ style.logo } />
        <h1>TODO'S</h1>
      </section>
      <section className={ style.user }>
        <Link to="/user" className={ style.user }>
          <img src={ user } alt="user-logo" />
          <p data-testid="email-field">{email}</p>
        </Link>
      </section>
  </header>
  )
}
