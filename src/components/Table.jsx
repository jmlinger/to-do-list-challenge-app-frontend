import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, updateTask } from '../redux/slices/tasks';

function Table({ task: { id, taskName, createdUpdatedAt, status }}) {
  const dispatch = useDispatch();
  const [editOn, setEditOn] = useState(false);
  const [task, setTask] = useState({
    id,
    taskName,
    createdUpdatedAt,
    status,
  });

  function handleChange({ target: { name, value } }) {
    setTask({
      ...task,
      [name]: value,
    });
  }

  function finishTaskEditing() {
    if (task.taskName) {
      setTask({
        ...task,
        createdUpdatedAt: moment().format("DD-MM-YYYY hh:mm:ss"),
      });

      dispatch(updateTask(task))
    }

    /* Reatribui o valor de taskName para seu valor global. Isso evita que a tarefa que sofreu uma tentativa
    de ser atualizada com nome vazio, ao entrar no modo de edição novamente, esteja preenchida com o valor anterior. */
    setTask({
      ...task,
      taskName,
    });

    setEditOn(false)
  }

  function deleteThisTask() {
    dispatch(removeTask(id));
  }

  const taskEditOpen = (
      <tr>
        <td>
          <input
            type="text"
            name="taskName"
            value={ task.taskName }
            onChange={ handleChange }
          />
        </td>
        <td>{ createdUpdatedAt }</td>
        <td>
          <select
            name="status"
            value={ task.status }
            onChange={ handleChange }
          >
            <option>Pendente</option>
            <option>Em andamento</option>
            <option>Concluída</option>
          </select>
        </td>
        <td>
          <button
            type="button"
            id="edit-task-btn"
            onClick={ () => finishTaskEditing() }
          >
            Encerrar edição
          </button>
        </td>
      </tr>
    );

  const taskEditClose = (
      <tr>
        <td>{ taskName }</td>
        <td>{ createdUpdatedAt }</td>
        <td>{ status }</td>
        <td>
          <button
            type="button"
            id="edit-task-btn"
            onClick={ () => setEditOn(true) }
          >
            Editar
          </button>
          <button
            type="button"
            id="delete-task-btn"
            onClick={ () => deleteThisTask() }
          >
            Excluir
          </button>
        </td>
      </tr>
    );

  if (editOn) return taskEditOpen;
  return taskEditClose;
}

export default Table;
