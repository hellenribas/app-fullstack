import React from 'react'
import { useContext } from 'react'
import Form from '../components/Form';
import AppContext from '../context/appContext'
import style from '../style/Form.module.css';


export default function Register() {
  const {
       error2,
      } = useContext(AppContext);
  return (
    <main className={ style.main }>
      <Form />
      { error2 && <p className={ style.error }>{error2}</p> }
    </main>
  )
}
