/**
 *
 * QuickFormEntry
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from 'components/layouts/atoms/FormInput';
import styled from 'styled-components';
import moment from 'moment';

function QuickFormEntry({ onSubmit, SubmitingUserEntries }) {
  const [user, setUserDetails] = useState({ name: '', age: '', salary: '' });
  const [errors, setErros] = useState([]);

  // store entered values in shared state of the form that will be used to send when submit button clicked
  const onChange = e => {
    const { name, value } = e.target;
    setUserDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // check errors and assign them if they exist to their fields
  const checkErrors = name => {
    const filtered = errors.filter(x => x.Name === name);
    return filtered;
  };

  // validations of the form triggers when submit button is clicked
  const handleValidation = () => {
    // validate that user name exist
    const errorsCurrent = [];
    if (!user.name || user.name.length === 0) {
      errorsCurrent.push({ Name: 'name', Value: 'Enter your name please!' });
    }
    if (!user.name || (user.name.length < 2 && user.name.length > 0)) {
      errorsCurrent.push({ Name: 'name', Value: 'Minimum characters are 2' });
    }
    if (!user.salary || user.salary.length === 0) {
      errorsCurrent.push({
        Name: 'salary',
        Value: 'Enter your salary please!',
      });
    }
    if (!user.age || user.age.length === 0) {
      errorsCurrent.push({ Name: 'age', Value: 'Enter your age please!' });
    }
    setErros(errorsCurrent);
    return errorsCurrent;
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const currenterrors = handleValidation();
    if (currenterrors.length === 0) {
      // call parent function to trigger api
      onSubmit(user);
      setUserDetails({ name: '', age: '', salary: '' });
    }
  };
  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <div>
        {errors.length > 0 &&
          errors.map((error, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index} className="error-message" role="alert">
              {error.Value}
            </div>
          ))}
      </div>
      {/* FormInput ==> value and name having the same variable that help to update the 
        corresponding property in state with a single change handler */}
      <FormInput
        name="name"
        label="Full Name"
        value={user.name}
        onChange={onChange}
        error={checkErrors('name')}
        maxlength={20}
        required
        disabled={!!SubmitingUserEntries}
      />

      <FormInput
        name="salary"
        label="Salary"
        value={user.salary}
        onChange={onChange}
        error={checkErrors('salary')}
        type="number"
        required
        disabled={!!SubmitingUserEntries}
      />

      <FormInput
        name="age"
        label="Date Of Birth"
        value={user.age}
        onChange={onChange}
        error={checkErrors('age')}
        type="date"
        max={moment().format('YYYY-MM-DD')} // make sure last date entered is current date
        required
        disabled={!!SubmitingUserEntries}
      />
      <button
        type="submit"
        variant="contained"
        disabled={user.name === '' || user.salary === '' || user.age === ''}
      >
        Submit
      </button>
    </StyledForm>
  );
}

QuickFormEntry.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  SubmitingUserEntries: PropTypes.any,
};

const StyledForm = styled.form`
  padding: 20px;
  border-radius: 5px;
`;

export default memo(QuickFormEntry);
