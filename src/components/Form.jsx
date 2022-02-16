import React, { useState } from 'react';

function Form() {
  const [task, setTask] = useState('');

  function handleChange({ target: { value } }) {
    setTask(value);
  }

  return (
    <form>
      <input
        data-testid="task-input"
        type="text"
        name="task"
        placeholder="Tarefa"
        onChange={ handleChange }
      />
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
