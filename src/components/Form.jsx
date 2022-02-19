import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, changeOrder } from '../redux/slices/tasks';

function Form() {
  const dispatch = useDispatch();
  
  const [task, setTask] = useState({
    id: 1,
    taskName: '',
    createdUpdatedAt: '',
    status: 'Pendente',
  });

  function handleChange({ target: { name, value } }) {
    if (name === 'orderBy') {
      dispatch(changeOrder(value));
    }
    if (name !== 'orderBy') {
      setTask({
        ...task,
        taskName: value,
        createdUpdatedAt: moment().format("DD-MM-YYYY hh:mm:ss"),
      });
    }
  }
  
  function createTask() {
    if (task.taskName) {
      dispatch(addTask(task));

      setTask({
        ...task,
        id: task.id + 1,
        taskName: '',
        createdUpdatedAt: '',
      });
    }
  }

  return (
    <form>
      <input
        data-testid="task-input"
        type="text"
        name="task"
        value={ task.taskName }
        placeholder="Tarefa"
        onChange={ handleChange }
      />
      <button
        type="button"
        onClick={ () => createTask() }
      >
        Adiciona tarefa
      </button>

      <select name="orderBy" onChange={ handleChange } >
        <option value="createdUpdatedAt">Data de criação</option>
        <option value="taskName">Tarefa</option>
        <option value="status">Status</option>
      </select>
    </form>
  );
}

export default Form;
