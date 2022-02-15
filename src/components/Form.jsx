import React from 'react';

function Form() {
  return (
    <form>
      <input type="text" />
      <textarea type="text" />
      <select>
        <option value="">Pendente</option>
        <option value="">Em andamento</option>
        <option value="">Pronto</option>
      </select>
      <button>Adiciona tarefa</button>
    </form>
  );
}

export default Form;
