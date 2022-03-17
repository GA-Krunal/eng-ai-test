import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import Quiz from './components/Quiz';

test('renders quiz component', () => {
  render(
  <Provider store = {store}>
    <BrowserRouter>
    <Quiz/>
  </BrowserRouter></Provider>);
  const txt = screen.getByText(/Quiz/);
  expect(txt).toBeInTheDocument();
});
