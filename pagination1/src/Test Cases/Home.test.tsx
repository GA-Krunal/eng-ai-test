import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/Store';
import Home from '../components/Home';

test('app component renders successfully', () => {
  render(
  <Provider store = {store}>
    <BrowserRouter>
    <Home/>
  </BrowserRouter>
  </Provider>);
  const linkElement = screen.getByText(/Data Table/i);
  expect(linkElement).toBeInTheDocument();
});
