import * as Types from "../constants";

export const queryFetching = (payload) => ({
  type: Types.QUERY_FETCHING,
  payload
});

export const queryFetchedSucceed = (payload) => ({
  type: Types.QUERY_FETCHED_SUCCEED,
  payload
});

export const queryFetchedFailed = (payload) => ({
  type: Types.QUERY_FETCHED_FAILED,
  payload
});