import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Home from '../components/Home';

test('app component renders successfully', () => {
  render(
  <Provider store = {store}>
    <Home/>
  </Provider>);
  const linkElement = screen.getByText(/Data Table/i);
  expect(linkElement).toBeInTheDocument();
});
