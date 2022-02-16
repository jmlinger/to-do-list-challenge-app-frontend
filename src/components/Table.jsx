import React from 'react';

function Table(task) {
  return (
    <tr>
      <td>{ task }</td>
      <td>
        <select name="Status" id="select-status">
          <option selected>Pendente</option>
          <option>Em endamento</option>
          <option>Concluída</option>
        </select>
      </td>
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
        >
          Deletar
        </button>
      </td>
    </tr>
  );
}

export default Table;
