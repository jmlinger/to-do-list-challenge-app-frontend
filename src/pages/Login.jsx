import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div id="login-body">
      <fieldset id="login-fieldset">
          <form id="login-form">
            <input
              data-testid="email-input"
              type="email"
              name="email"
              // value={ email }
              placeholder="Email"
              // onChange={ handleChange }
            />
            <input
              data-testid="password-input"
              type="password"
              name="password"
              // value={ password }
              placeholder="Senha"
              // onChange={ handleChange }
            />
            <Link to="/todolist">
              <button id="login-button"
                type="submit"
                // disabled={ validateEmail() }
                // onClick={ () => sendEmail(email) }
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
