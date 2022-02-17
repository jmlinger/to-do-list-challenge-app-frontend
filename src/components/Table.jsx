import React from 'react';

function Table({ task: { name, createdUpdatedAt, status }}) {
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
        >
          Deletar
        </button>
      </td>
    </tr>
  );
}

export default Table;
