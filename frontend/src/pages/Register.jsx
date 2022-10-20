import React from 'react'
import { useContext } from 'react'
import AppContext from '../context/appContext'
import style from '../style/Form.module.css';


export default function Register() {
  const {name,
     password, 
     handleEmail,
      handleName,
       email, 
       phone, 
       handlePhone, 
       handlePassword,
       error2,
       register} = useContext(AppContext);
  return (
    <main className={ style.main }>
    <form className={ style.register }>
      <label htmlFor="name">
        Nome:
      <input type="text" id='name' value={ name } onChange={ handleName } />
      </label>
      <label htmlFor="email">
        Email:
      <input type="text" id='email' value={email} onChange={handleEmail} />
      </label>
      <label htmlFor="password">
        Senha:
      <input type="text" id='password' value={ password } onChange={ handlePassword } />
      </label>
      <label htmlFor="phone">
        Telefone:
      <input type="text" id='phone' value={phone} onChange={handlePhone} />
      </label>
      <button type='submit' onClick={ register }>Cadastrar</button>
      { error2 && <p className={ style.error }>{error2}</p> }
    </form>
    </main>
  )
}
