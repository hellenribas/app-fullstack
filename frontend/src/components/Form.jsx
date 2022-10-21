import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import AppContext from '../context/appContext';
import style from '../style/Form.module.css';


export default function Form() {
  const {name,
    password, 
    handleEmail,
     handleName,
      email, 
      phone, 
      handlePhone, 
      handlePassword,
      editUser,
      register} = useContext(AppContext);
      const location = useLocation()
  return (
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
    { location.pathname === '/user' ? (
      <button type='button' onClick={ editUser }>Editar</button>
    ) :
     (<button type='submit' onClick={ register }>Cadastrar</button> )}
  </form>
  )
}
