import * as Types from "../constants";

const initialState = {
  isFetching: false,
  query: '',
  error: ''
};

function search(state = initialState, action){
  switch(action.type){
    case Types.QUERY_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case Types.QUERY_FETCHED_SUCCEED:
      return {
        ...state,
        query: action.payload,
        isFetching: false
      };
    case Types.QUERY_FETCHED_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
}
export default search;