import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

test('renders app component', () => {
  render(
  <Provider store = {store}>
    <BrowserRouter>
    <App />
  </BrowserRouter></Provider>);
  const placeholder = screen.getByPlaceholderText(/Enter Asteroid ID/);
  expect(placeholder).toBeInTheDocument();
});
