import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchStockData, displayStockData } from '../redux/reducer';

function ShowAll() {
  const stockSymbol = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchStockData());
  }, []);

  const getDetails = (symbol) => {
    dispatch(displayStockData(symbol));
  };

  return (
    <>

      <h3 className="headline"> Real Time Crypto currency data</h3>

      <div className="data">

        {

  stockSymbol.length > 1
    ? stockSymbol.map((stock) => (
      <div key={stock.symbol} className="col-sm-4 colDiv">
        <button
          className="itemButtons"
          type="button"
          onClick={() => {
            getDetails(stock);
            navigate('/details');
          }}

        >
          {stock.symbol}

        </button>

      </div>
    ))

    : '...Loading....Please wait'
         }
      </div>
    </>
  );
}

export default ShowAll;
