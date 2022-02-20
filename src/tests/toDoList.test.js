import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ToDoList from '../pages/ToDoList';
import { renderWithRouterAndStore } from './testConfig';

describe('Testes unitários da página de ToDoList.', () => {
  const taskNameId = 'taskName-input';
  const addTaskId = 'addTask-btn';
  const orderById = 'orderBy-select';
  const defaultStatus = 'Pendente';
  const taskList = [
    'Tarefa 1'
  ];


  test('Verifica se a página contêm os elementos esperados após ser renderizada.', () => {
    renderWithRouterAndStore(<ToDoList />);

    const taskNameInput = screen.getByTestId(taskNameId);
    const addTaskButton = screen.getByTestId(addTaskId);
    const orderBySelect = screen.getByTestId(orderById);

    expect(taskNameInput).toBeInTheDocument();
    expect(addTaskButton).toBeInTheDocument();
    expect(orderBySelect).toBeInTheDocument();
  });

  test('Verifica se tarefas são adicionadas.', () => {
    renderWithRouterAndStore(<ToDoList />);

    const taskNameInput = screen.getByTestId(taskNameId);
    const addTaskButton = screen.getByTestId(addTaskId);

    taskList.forEach((task) => {
      userEvent.type(taskNameInput, task);
      userEvent.click(addTaskButton);
      const taskName = screen.getByText(task);
      // const statusTH = screen.getByRole('columnheader', { name: 'Status' });
      // const status = within(statusTH).getByRole('cell', { name: defaultStatus });
      expect(taskName).toBeInTheDocument();
      // expect(status).toBeInTheDocument();
    });
  });
});
