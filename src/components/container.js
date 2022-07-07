import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import ShowAll from './showAll';
import StockData from './stockData';

function Container() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ShowAll />} />
        <Route path="/home" element={<ShowAll />} />

        <Route path="/details" element={<StockData />} />

      </Routes>

    </div>
  );
}

export default Container;
