import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import AppContext from '../context/appContext';
import style from '../style/Tasks.module.css';

export default function AddTask() {
  const { addTask, task, handleTask, description, handleDescription } = useContext(AppContext);
  return (
    <div>
        <div className={ style.container }>
          <Header />
          <div className={ style.container_form }>
            <form className={ style.form }>
              <div className={ style.head }>
                <h1 className={ style.title }>ADICIONAR TAREFAS</h1>
                    <button
                      type="button"
                      onClick={ addTask }
                    >
                      +

                    </button>
              </div>
              <label htmlFor="value">
                <span>O que será feito?</span>
                <input
                  type="text"
                  data-testid="value-input"
                  name="value"
                  id="value"
                  value={ task }
                  onChange={ handleTask }
                  placeholder="Estudar"
                />
              </label>
              <label htmlFor="description">
                Quer adicionar mais detalhes?
                <input
                  type="text"
                  data-testid="description-input"
                  name="description"
                  id="description"
                  value={ description }
                  placeholder="assistir aula no youtube"
                  onChange={ handleDescription }
                />
              </label>
              <Link
                to="/home"
              >
                <button type="button" className={ style.link_expenses }>TAREFAS</button>
              </Link>
            </form>
          </div>
      </div>
    </div>
  )
}
