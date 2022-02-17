import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask } from '../redux/slices/tasks';

function Table({ task: { id, name, createdUpdatedAt, status }}) {
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{ name }</td>
      <td>{ createdUpdatedAt }</td>
      <td>{ status }</td>
      <td>
        <button
          type="button"
          id="edit-task-btn"
        >
          Editar
        </button>
        <button
          type="button"
          id="delete-task-btn"
          onClick={ () => dispatch(removeTask(id)) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

export default Table;
