/*
 *
 * QuickUserEntry reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  userDetails: null,
  userDetailsLoading: false,
  userDetailsError: false,
};

/* eslint-disable default-case, no-param-reassign */
const quickUserEntryReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SUBMIT_USER_DETAILS:
        draft.userDetailsError = false;
        draft.userDetailsLoading = true;
        break;
      case types.SUBMIT_USER_DETAILS_SUCCESS:
        draft.userDetailsError = false;
        draft.userDetailsLoading = false;
        draft.userDetails = action.user;
        break;
      case types.SUBMIT_USER_DETAILS_ERROR:
        draft.userDetailsError = action.error;
        draft.userDetailsLoading = false;
        break;
    }
  });

export default quickUserEntryReducer;
