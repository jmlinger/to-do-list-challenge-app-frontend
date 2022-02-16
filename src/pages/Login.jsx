import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { loginValidation } from '../utils/loginValidation';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  function handleChange({ target: { name, value } }) {
    setLogin({ ...login, [name]: value });
  }

  function handleLoginValidation() {
    const validationError = loginValidation(login).error;
    if (validationError) return true;
    return false;
  }

  return (
    <div id="login-body">
      <fieldset id="login-fieldset">
          <form id="login-form">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              placeholder="Email"
              onChange={ handleChange }
            />
            <input
              data-testid="password-input"
              type="password"
              name="password"
              placeholder="Senha"
              onChange={ handleChange }
            />
            <Link to="/todolist">
              <button 
                data-testid="login-button"
                type="submit"
                disabled={ handleLoginValidation() }
              >
                Entrar
              </button>
            </Link>
          </form>
        </fieldset>
    </div>
  );
}

export default Login;
