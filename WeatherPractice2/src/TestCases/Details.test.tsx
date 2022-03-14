import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Details from '../components/Details';

test('renders details page', () => {
  render(<Provider store = {store}>
    <BrowserRouter>
    <Details/>
  </BrowserRouter></Provider>);
   const linkElement = screen.getByText(/Country Info/);
   expect(linkElement).toBeInTheDocument();
});
