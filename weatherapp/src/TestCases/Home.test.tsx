import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import Home from '../components/Home';

test('renders learn react link', () => {
  render(<Provider store = {store}>
    <BrowserRouter>
    <Home/>
  </BrowserRouter></Provider>);
   const placeholder = screen.getByPlaceholderText(/Enter country/);
   expect(placeholder).toBeInTheDocument();
});
