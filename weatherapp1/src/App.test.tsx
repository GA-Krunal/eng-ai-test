import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';

test('renders learn react link', () => {
  render(<Provider store = {store}>
    <BrowserRouter>
    <App />
  </BrowserRouter></Provider>);
  const linkElement = screen.getByText(/Landing page is here/);
  expect(linkElement).toBeInTheDocument();
});
