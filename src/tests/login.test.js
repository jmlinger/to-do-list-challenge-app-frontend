import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './utils/renderWithRouter';
import userEvent from '@testing-library/user-event';
import App from '../App.js';

describe('Testes unitários da página de login.', () => {
  const emailId = 'email-input';
  const passwordId = 'password-input';
  const loginButtonId = 'login-button';
  const genericEmail = 'email@email.com';
  const genericPassword = '123456';
  const toDoListPath = '/todolist';
  
  test('Verifica se a página contêm os elementos esperados após ser renderizada.', () => {
    renderWithRouter(<App/>);
    
    const emailInput = screen.getAllByTestId(emailId);
    const passwordInput = screen.getAllByTestId(passwordId);
    const loginButton = screen.getAllByTestId(loginButtonId);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  test('Verifica se ao entrar na página o botão de login está desabilitado', () => {
    renderWithRouter(<App/>);

    const loginButton = screen.getAllByTestId(loginButtonId);
    expect(loginButton).toBeDisabled();
  });

  test('Verifica se ao preencher o os campos email e senha o botão é habilitado', () => {
    renderWithRouter(<App/>);

    const emailInput = screen.getAllByTestId(emailId);
    const passwordInput = screen.getAllByTestId(passwordId);
    const loginButton = screen.getAllByTestId(loginButtonId);

    userEvent.type(emailInput, genericEmail);
    userEvent.type(passwordInput, genericPassword);
    expect(loginButton).toBeEnabled();
  });
  
  test('Verifica se ao clicar no botão de login a página é redirecionada.', () => {
    renderWithRouter(<App/>);
    
    const emailInput = screen.getAllByTestId(emailId);
    const passwordInput = screen.getAllByTestId(passwordId);
    const loginButton = screen.getAllByTestId(loginButtonId);
    
    userEvent.type(emailInput, genericEmail);
    userEvent.type(passwordInput, genericPassword);
    userEvent.click(loginButton);
    const { pathname } = renderWithRouter(<App/>).history.location;
    expect(pathname).toBe(toDoListPath);
  });
});
