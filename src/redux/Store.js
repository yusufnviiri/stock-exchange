import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import stockReducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = {
  stocks: stockReducer,
};
const store = configureStore({
  reducer: rootReducer,

});
composeEnhancers(applyMiddleware(thunk));
export default store;
