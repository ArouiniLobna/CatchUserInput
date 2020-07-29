/**
 *
 * QuickUserEntry
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import QuickFormEntry from 'components/forms/QuickFormEntry';
import Loader from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectUserDetails,
  makeSelectUserDetailsError,
  makeSelectUserDetailsLoading,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import { SubmitUserDetails } from './actions';

// this component should hanlde only the submit functionality to the api
export function QuickUserEntry({
  userDetails,
  userError,
  SubmitingUserEntries,
  handleSubmitUserDetails,
}) {
  useInjectReducer({ key: 'quickUserEntry', reducer });
  useInjectSaga({ key: 'quickUserEntry', saga });
  if (
    SubmitingUserEntries === false &&
    userDetails &&
    userDetails.data &&
    userDetails.status === 'success'
  ) {
    // console.log('in');
    toast.success(`${userDetails.message}: ${userDetails.data.id}`, {
      position: toast.POSITION.TOP_CENTER,
    });
  }
  if (userError) {
    toast.error(userError, {
      position: toast.POSITION.TOP_CENTER,
    });
  }

  return (
    <StyledFormWrapper>
      <ToastContainer autoClose={10000} />
      {SubmitingUserEntries ? (
        <StyledLoader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
      ) : null}

      <QuickFormEntry
        SubmitingUserEntries={SubmitingUserEntries}
        onSubmit={handleSubmitUserDetails}
      />
    </StyledFormWrapper>
  );
}

QuickUserEntry.propTypes = {
  handleSubmitUserDetails: PropTypes.func.isRequired,
  userDetails: PropTypes.any,
  userError: PropTypes.bool,
  SubmitingUserEntries: PropTypes.bool,
};

const StyledLoader = styled(Loader)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  margin: auto;
  bottom: 0;
  width: 100px;
  z-index: 1;
  height: 100px;
`;
const StyledFormWrapper = styled.div`
  position: relative;
`;

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectUserDetails(),
  userError: makeSelectUserDetailsError(),
  SubmitingUserEntries: makeSelectUserDetailsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmitUserDetails: userEntries => {
      dispatch(SubmitUserDetails(userEntries));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(QuickUserEntry);
