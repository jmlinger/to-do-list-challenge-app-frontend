import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/slices/tasks';

function Form() {
  const dispatch = useDispatch();
  
  const [task, setTask] = useState({
    id: 1,
    name: '',
    createdUpdatedAt: '',
    status: 'Pendente',
  });

  function handleChange({ target: { value } }) {
    setTask({
      ...task,
      name: value,
      createdUpdatedAt: moment().format("DD-MM-YYYY hh:mm:ss"),
    });
  }
  
  function handleClick(state) {
    dispatch(addTask(state));

    setTask({
      ...task,
      id: task.id + 1,
      name: '',
      createdUpdatedAt: '',
    });
  }

  return (
    <form>
      <input
        data-testid="task-input"
        type="text"
        name="task"
        value={ task.name }
        placeholder="Tarefa"
        onChange={ handleChange }
      />
      <button
        type="button"
        onClick={ () => handleClick(task) }
      >
        Adiciona tarefa
      </button>
      <select>
        <option value="">Tarefa</option>
        <option value="">Data de criação</option>
        <option value="">Status</option>
      </select>
    </form>
  );
}

export default Form;
