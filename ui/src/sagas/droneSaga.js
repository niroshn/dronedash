import { take, put, call, apply } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import { GET_ACTIVE_DRONES, setActiveDrones, getActiveDrones } from './../actions';

export function* activeDroneSaga() {
  yield take(GET_ACTIVE_DRONES);
  const response = yield call(fetch, `http://localhost:3000/drone/all`);

  const data = yield apply(response, response.json);

  console.log(data);

  yield put(getActiveDrones(data));
}
