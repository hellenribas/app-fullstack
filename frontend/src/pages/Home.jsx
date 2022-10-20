import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import Header from '../components/Header';
import AppContext from '../context/appContext'
import style from '../style/Home.module.css';


export default function Home() {
  const { data, getTasks } = useContext(AppContext);

  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div className={ style.container }>
      <Header />
      <main  className={ style.main }>
        <table className={ style.table }>
          <thead>
            <tr>
              <td>Tarefa</td>
              <td>Descrição</td>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={ e.id }>
                <td>{e.tarefa}</td>
                <td>{e.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </main>
    </div>
  )
}
