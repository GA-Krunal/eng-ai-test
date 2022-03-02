import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

test('render Home commponent', () => {
  render(
  <Provider store = {store}>
    <BrowserRouter>
   <Home/>
  </BrowserRouter></Provider>);
  const input = screen.getByTestId("Asteroid ID");
  expect(input).toBeInTheDocument();
});
