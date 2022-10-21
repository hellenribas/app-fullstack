import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import AppContext from '../context/appContext'
import style from '../style/Home.module.css';


export default function Home() {
  const { data, getTasks, deleteTasks } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    getTasks()
  }, [])
  return (
    <div className={ style.container }>
      <Header />
      <main  className={ style.main }>
      {data.length === 0
            ? (
              <section className={ style.container_section }>
                <Link
                  to="/add"
                >
                  <button
                    type="button"
                    className={ style.link_task }
                  >
                    +
                  </button>

                </Link>
                <h3>ADICIONAR TAREFA</h3>
              </section>
            ) :
        (<table className={ style.table }>
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
        </table>)}
    </main>
      <section className={ style.containerButton }>    
        <button type='button' onClick={ deleteTasks }>Excluir Tarefas</button>
        <button type='button' onClick={ () => navigate('/add') }>Adicionar Tarefa</button>
      </section>
    </div>
  )
}
