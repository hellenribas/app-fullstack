import AppContext from "./appContext";
import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AppProvider ({ children }) {
  const [email, setEmail]  = useState('');
  const [password, setPassword]  = useState('');
  const [name, setName]  = useState('');
  const [phone, setPhone]  = useState('');
  const [data, setData]  = useState([]);
  const [error, setError]  = useState('');
  const [error2, setError2]  = useState('');
  const [isDisabled, setDisabled]  = useState(true);
  const navigate = useNavigate();
  

  const handleEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handlePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handleName = ({ target }) => {
    setName(target.value)
  }

  const handlePhone = ({ target }) => {
    setPhone(target.value)
  }

  const validate = useCallback(() => {
    const numbersix = 6;
    if (email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    && password.length >= numbersix) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password])

  useEffect(() => {
    validate()
  }, [email, password, validate])

  const login = async () => {
    const body = JSON.stringify({
      email,
      senha: password,
    })
    const request = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body
    });
    const data = await request.json();
    if(data.token) {
      localStorage.setItem('token', data.token);
      navigate('/home')
    } else {
      setError('login inválido');
    }
  }

  const register = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      nome: name,
      email,
      senha: password,
      telefone: phone,
    })
    const request = await fetch('http://localhost:3001/login/register', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
      body
    });
    const data = await request.json();
    if(data.token) {
      localStorage.setItem('token', data.token);
      navigate('/home')
    } else {
      setError2('Não foi possível realizar o cadastro, verifique os dados preenchidos');
    }
  }

  const getTasks = async (e) => {
    const token = localStorage.getItem('token');
    const request = await fetch('http://localhost:3001/tasks', {
      method: 'GET',
      headers: { 'Content-type': 'application/json; charset=UTF-8', Authorization: token },
    });
    const data = await request.json();
    console.log(data);
    setData(data);
  }


  const contexto = {
    login,
    handleEmail,
    handlePassword,
    email,
    name,
    handleName,
    phone,
    handlePhone,
    password,
    isDisabled,
    register,
    error,
    error2,
    getTasks,
    data
  }

  return (
    <AppContext.Provider value={ contexto }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;