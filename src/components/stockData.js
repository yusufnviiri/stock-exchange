import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { IoIosArrowBack } from 'react-icons/io';
import { displayStockData } from '../redux/reducer';

function StockData() {
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayStockData());
  }, []);
  const navigate = useNavigate();

  return (

    <div className="selectedData">

      <button type="button" className="back">
        {' '}
        <IoIosArrowBack onClick={() => { navigate('/home'); }} />
      </button>
      <div className="symbolName">
        {stocks.symbol ? (
          <h3>
            {stocks.symbol}

          </h3>
        ) : 'selected Item'}

      </div>

      <div className="allDetails">

        <p>
          {' '}
          Ask Price ($):
          {' '}
          <span>{stocks.askPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Bid Price ($):
          {' '}
          <span>{stocks.bidPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Last Price ($):
          {' '}
          <span>{stocks.lastPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Open Price ($) :
          {' '}
          <span>{stocks.openPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          High Price ($):
          {' '}
          <span>{stocks.highPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Low Price ($) :
          {' '}
          <span>{stocks.lowPrice}</span>
        </p>
        {' '}
        <p>
          {' '}
          Volume :
          {' '}
          <span>{stocks.volume}</span>
        </p>
        {' '}
        <p>
          {' '}
          Quote Volume :
          {' '}
          <span>{stocks.quoteVolume}</span>
        </p>
        <p>
          {' '}
          Previous Close :
          {' '}
          <span>{stocks.lastQty}</span>
        </p>
        {' '}
        <p>
          {' '}
          Change   :
          {' '}
          <span>{stocks.priceChangePercent}</span>
        </p>
        {' '}
        <p>
          {' '}
          Change Percent (%):
          {' '}
          <span>{stocks.changePercent}</span>
        </p>
        {' '}
        <p>
          {' '}
          Price  Change Percent (%) :
          {' '}
          <span>{stocks.priceChangePercent}</span>
        </p>
      </div>
      {console.log(stocks)}
    </div>

  );
}

export default StockData;
