import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducer';

const initialState = {};

const middleware = [thunk];

// store takes a root reducer, then inital state, and an enhancer in our case "applyMiddleware"
const store = createStore(
  rootReducer, 
  initialState, 
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

// console.log(store);
// console.log(store.getState());

export default store;