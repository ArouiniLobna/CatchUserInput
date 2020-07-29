import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the quickUserEntry state domain
 */

const selectQuickUserEntryDomain = state =>
  state.quickUserEntry || initialState;

/**
 * Other specific selectors
 */

const makeSelectUserDetails = () =>
  createSelector(
    selectQuickUserEntryDomain,
    siteState => siteState.userDetails,
  );

const makeSelectUserDetailsError = () =>
  createSelector(
    selectQuickUserEntryDomain,
    siteState => siteState.userDetailsError,
  );
const makeSelectUserDetailsLoading = () =>
  createSelector(
    selectQuickUserEntryDomain,
    siteState => siteState.userDetailsLoading,
  );

/**
 * Default selector used by QuickUserEntry
 */

const makeSelectQuickUserEntry = () =>
  createSelector(
    selectQuickUserEntryDomain,
    substate => substate,
  );

export default makeSelectQuickUserEntry;
export {
  selectQuickUserEntryDomain,
  makeSelectUserDetails,
  makeSelectUserDetailsError,
  makeSelectUserDetailsLoading,
};
