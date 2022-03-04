import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/Store';

test('app component renders successfully', () => {
  render(
  <Provider store = {store}>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>);
  const linkElement = screen.getByText(/Data Table/i);
  expect(linkElement).toBeInTheDocument();
});
