/**
 *
 * QuickUserEntry
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import QuickFormEntry from 'components/forms/QuickFormEntry';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectQuickUserEntry from './selectors';
import reducer from './reducer';
import saga from './saga';

export function QuickUserEntry() {
  useInjectReducer({ key: 'quickUserEntry', reducer });
  useInjectSaga({ key: 'quickUserEntry', saga });

  return <QuickFormEntry />;
}

QuickUserEntry.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  quickUserEntry: makeSelectQuickUserEntry(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(QuickUserEntry);
