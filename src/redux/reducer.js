export const baseUrl = 'https://api.binance.com/api/v3/ticker/24hr';
export const getstockdata = (data) => ({
  type: 'GET_STOCK_DATA',
  payload: data,
});

export const stockData = (symbol) => ({
  type: 'STOCK_DATA',
  payload: symbol,
});

export const displayStockData = (item) => async (dispatch) => {
  try {
    dispatch(stockData(item));
  } catch (err) {
    return err;
  }
  return null;
};

export const fetchStockData = () => async (dispatch) => {
  const response = await fetch(baseUrl);
  const data = await response.json();

  dispatch(getstockdata(data.slice(0, 14)))
    .catch((error) => { console.log(error); });
};

export default function stockReducer(state = [], action) {
  switch (action.type) {
    case 'GET_STOCK_DATA':
      return action.payload;
    case 'STOCK_DATA':
      return action.payload;

    default:
      return state;
  }
}
