import { SUBMIT } from '../constants/index';

export function getQuery(query) {
  return {
    type: SUBMIT,
    payload: query
  }
}