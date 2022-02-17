import React from 'react';
import './ToDoList.css'
import Form from '../components/Form';
import Table from '../components/Table';
import { useSelector } from 'react-redux';

function ToDoList() {
  const taskList = useSelector(({ tasks }) => tasks.taskList);

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
          {  taskList.map((task) =>
            <Table key={ task.id } task={ task }/>) }
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;