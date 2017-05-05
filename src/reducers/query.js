import { SUBMIT } from '../constants/index';

const initialState = {
  query: ''
}

export default function query(state = initialState, action) {
  switch (action.type) {

    case SUBMIT:
      return { ...state, query: action.payload }

    default:
      return state;
  }
}