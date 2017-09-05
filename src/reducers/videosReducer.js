import * as Types from "../constants";

const initialState = {
  videos: [],
  error: ''
};

function videos(state = initialState, action){
  switch(action.type){
    case Types.VIDEOS_LOADED:
      return {
        ...state,
        videos: action.payload,
      };
    case Types.VIDEOS_DIDNT_LOADED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
export default videos;