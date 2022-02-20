import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';

export const renderWithRouterAndStore = (component) => {
  const history = createMemoryHistory();
  return ({
    ...render(
      <Provider store={ store }>
        <Router location={ history.location } navigator={ history }>{ component }</Router>
      </Provider>
    ),
    history,
  });
};
