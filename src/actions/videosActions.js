import * as Types from "../constants";

export const videosLoaded = (payload) => ({
  type: Types.VIDEOS_LOADED,
  payload
});

export const videosDidntLoaded = (payload) => ({
  type: Types.VIDEOS_DIDNT_LOADED,
  payload
});
