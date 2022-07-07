/* eslint-disable  */
import React from 'react';
import * as router from 'react-router';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ShowAll from '../components/showAll';
import StockData from '../components/stockData';
import store from '../redux/Store';
import NavBar from '../NavBar';


describe('Ensure app renders as expected', () => {
    const navigate = jest.fn();  
    beforeEach(() => {
      jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
    });
    
    test('renders the Details page', () => {
      render(<Provider store={store}><StockData /></Provider>);
      expect(screen.findAllByText('Price Change:')).toMatchSnapshot();
    });
    test('renders the home page', () => {
        render(<Provider store={store}><ShowAll /></Provider>);
        expect(screen.findAllByText(' Real Time Crypto currency data')).toMatchSnapshot();
      });
   

   
  });
  