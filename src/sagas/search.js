import { takeEvery } from "redux-saga/effects";
import * as Types from "../constants";
import { call, put } from "redux-saga/effects";
import axios from "axios";
import { queryFetchedSucceed, queryFetchedFailed } from "../actions/searchActions";
import { videosLoaded, videosDidntLoaded } from "../actions/videosActions";

function* fetchQuery(action) {
  const query = action.payload.query;
  try {
    const result = yield call(axios.get,
      `https://www.googleapis.com/youtube/v3/search?part=id%2C+snippet&maxResults=10&q=${query}+&key=AIzaSyCH2MCF0WEy93XpxrRmxfF6FEqxxwVsLFI`);

    yield put(queryFetchedSucceed(query));

    result
      ? yield put(videosLoaded(result.data.items))
      : yield put(videosDidntLoaded('Videos didn\'t loaded'));

  } catch (e) {
    yield put(queryFetchedFailed(e));
  }
}


function* search() {
  yield takeEvery(Types.QUERY_FETCHING, fetchQuery);
}

export default search;
