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
    status,
    createdUpdatedAt,
  });

  function handleChange({ target: { name, value } }) {
    setTask({
      ...task,
      [name]: value,
    });
  }

  function finishTaskEditing() {
    if (task.taskName && (task.taskName !== taskName || task.status !== status)) {
      dispatch(updateTask({ 
        ...task,
        createdUpdatedAt: moment().format("DD-MM-YYYY hh:mm:ss")
      }));
    }

    /* Reatribui o valor de taskName para seu valor global, caso o campo esteja vazio. Isso evita que a tarefa que sofreu uma tentativa
    de ser atualizada com nome vazio, ao entrar no modo de edição novamente, esteja com o valor do campo vazio. */
    if (!task.taskName) {
      setTask({
        ...task,
        taskName,
      });
    }

    setEditOn(false);
  }

  function deleteThisTask() {
    dispatch(removeTask(id));
  }

  const renderTaskEditOpen = (
      <tr>
        <td>
          <input
            type="text"
            name="taskName"
            value={ task.taskName }
            onChange={ handleChange }
          />
        </td>
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
        <td>{ createdUpdatedAt }</td>
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

  const renderTaskEditClose = (
      <tr>
        <td>{ taskName }</td>
        <td>{ status }</td>
        <td>{ createdUpdatedAt }</td>
        <td>
          <button
            type="button"
            id="edit-task-btn"
            onClick={ () => setEditOn(true) }
          >
            Editar
          </button>
        </td>
        <td>
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

  if (editOn) return renderTaskEditOpen;
  return renderTaskEditClose;
}

export default Table;
