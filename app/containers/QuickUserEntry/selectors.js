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

/**
 * Default selector used by QuickUserEntry
 */

const makeSelectQuickUserEntry = () =>
  createSelector(
    selectQuickUserEntryDomain,
    substate => substate,
  );

export default makeSelectQuickUserEntry;
export { selectQuickUserEntryDomain };
