import { all, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import { apisEndPoints } from 'constants/apisEndpoint';
import * as types from './constants';
import { SubmitUserDetailsSuccess, SubmitUserDetailsError } from './actions';

/* **************************************** fetchUserDetails start **************************************** */
export function* fetchUserDetails(action) {
  const endpoint = Object.assign({}, apisEndPoints());
  const url = endpoint.DUMMY_API;
  try {
    const globalData = yield call(axios.post, url, action.userEntries, {
      headers: {
        // to fix CORS plicy error
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    yield put(SubmitUserDetailsSuccess(globalData.data));
  } catch (error) {
    yield put(SubmitUserDetailsError(error.response));
  }
}

export function* submituserDetails() {
  yield takeLatest(types.SUBMIT_USER_DETAILS, fetchUserDetails);
}

// Individual exports for testing
export default function* quickUserEntrySaga() {
  // See example in containers/HomePage/saga.js
  yield all([submituserDetails()]);
}
