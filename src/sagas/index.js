import { fork } from "redux-saga/effects";
import search from "./search";

export default function* () {
  yield fork(search);
}