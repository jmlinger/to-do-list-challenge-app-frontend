import React from 'react';

function Form() {
  return (
    <form>
      <input type="text" />
      <button>Adiciona tarefa</button>
      <select>
        <option value="">Tarefa</option>
        <option value="">Data de criação</option>
        <option value="">Status</option>
      </select>
    </form>
  );
}

export default Form;
