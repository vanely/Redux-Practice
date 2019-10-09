import {combineReducers} from 'redux';
import postReducer from './postReducer';

// combines all of our reducers into one unifying reducer for state(store) modification
export default combineReducers({
  posts: postReducer
});

// console.log(combineReducers);
