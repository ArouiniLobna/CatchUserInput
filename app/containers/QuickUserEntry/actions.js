/*
 *
 * QuickUserEntry actions
 *
 */

import * as types from './constants';

/* **************************************** load a Repos start **************************************** */
export function SubmitUserDetails(userEntries) {
  return {
    type: types.SUBMIT_USER_DETAILS,
    userEntries,
  };
}

export function SubmitUserDetailsSuccess(user) {
  return {
    type: types.SUBMIT_USER_DETAILS_SUCCESS,
    user,
  };
}

export function SubmitUserDetailsError(error) {
  return {
    type: types.SUBMIT_USER_DETAILS_ERROR,
    error,
  };
}
