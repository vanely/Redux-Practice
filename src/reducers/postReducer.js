import {actionTypes} from '../actions/types';

const initialState = {
  items: [],
  item: {},
};

export default function(state = initialState, action) {
  switch(action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      }
    case actionTypes.NEW_POST:
      return {
        ...state,
        item: action.payload,
      }
    default:
      return state;      
  }
}
