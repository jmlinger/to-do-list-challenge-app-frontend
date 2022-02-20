import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import ToDoList from '../pages/ToDoList';
import { renderWithRouterAndStore } from './testConfig';


describe('Testes unitários da página de ToDoList.', () => {
  const taskNameId = 'taskName-input';
  const addTaskId = 'addTask-btn';
  const orderById = 'orderBy-select';


  test('Verifica se a página contêm os elementos esperados após ser renderizada.', () => {
    renderWithRouterAndStore(<ToDoList />)

    const taskNameInput = screen.getByTestId(taskNameId);
    const addTaskButton = screen.getByTestId(addTaskId);
    const orderBySelect = screen.getByTestId(orderById);

    expect(taskNameInput).toBeInTheDocument();
    expect(addTaskButton).toBeInTheDocument();
    expect(orderBySelect).toBeInTheDocument();
  });
});
