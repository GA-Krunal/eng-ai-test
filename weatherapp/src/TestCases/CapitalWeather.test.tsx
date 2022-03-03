import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import CapitalWeather from '../components/CapitalWeather';

test('renders details page', () => {
  render(<Provider store = {store}>
    <BrowserRouter>
    <CapitalWeather/>
  </BrowserRouter></Provider>);
   const linkElement = screen.getByText(/Weather of/);
   expect(linkElement).toBeInTheDocument();
});
