import React from 'react';
import './ToDoList.css'
import Form from '../components/Form';
import Table from '../components/Table';

function ToDoList() {
  return (
    <div id="form-body">
      <Form />
    <table>
      <thead>
        <tr>
          <th>Tarefa</th>
          <th>Data de criação</th>
          <th>Status</th>
          <th>Editar/Deletar</th>
        </tr>
      </thead>
      <tbody>
        {  <Table /> }
      </tbody>
    </table>
    </div>
  );
}

export default ToDoList;