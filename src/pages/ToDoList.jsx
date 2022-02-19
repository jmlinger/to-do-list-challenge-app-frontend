import React from 'react';
import './ToDoList.css'
import Form from '../components/Form';
import Table from '../components/Table';
import { useSelector } from 'react-redux';

function ToDoList() {
  const taskList = useSelector(({ tasks }) => tasks.taskList);
  const orderBy = useSelector(({ tasks }) => tasks.orderBy);

  return (
    <div id="form-body">
      <Form />
      <table>
        <thead>
          <tr>
            <th>Nome da Tarefa</th>
            <th>Status</th>
            <th>Criação/Atualização</th>
            <th>Editar tarefa</th>
            <th>Excluir tarefa</th>
          </tr>
        </thead>
        <tbody>
          { [...taskList].sort((a, b) => a[orderBy] > b[orderBy] ? 1 : -1).map((task) =>
            <Table key={ task.id } task={ task }/>) }
        </tbody>
      </table>
    </div>
  );
}

export default ToDoList;