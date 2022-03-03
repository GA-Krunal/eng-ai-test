import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter } from 'react-router-dom';
// import Home from '../components/Home';
import AsteroidInfo from '../components/AsteroidInfo';

test('render Asteroid info commponent', () => {
  render(
  <Provider store = {store}>
    <BrowserRouter>
   <AsteroidInfo/>
  </BrowserRouter>
  </Provider>);
  const h1 = screen.getByText(/AsteroidInfo/);
  expect(h1).toBeInTheDocument();
});
