/**
 *
 * FormInput
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function FormInput({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  required,
  type = 'text',
  max,
  maxlength,
  disabled,
}) {
  const [inputValue, setvalue] = useState(value || '');
  // console.log(max)
  // need following code block to monitor value change from upper scope
  // works when we click submit button and reset values
  useEffect(() => {
    setvalue(value);
  }, [value]);
  const onChangeLocal = event => {
    // console.log(event.target.value)
    onChange(event);
    setvalue(event.target.value);
  };
  return (
    <StyledinputGroup
      className={disabled ? 'disabled-inputGroup' : ''}
      error={error && error.length > 0}
    >
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeLocal}
        required={required}
        max={max}
        maxLength={maxlength}
        disabled={disabled}
      />
      {/* this condition ( inputValue ? 'floating-label' : '') make sure when field has a value, the label should be floating up */}
      <label
        htmlFor={name}
        className={`${error && error.length > 0 ? 'label-error' : ''} ${
          inputValue || type === 'date' ? 'floating-label' : ''
        }`}
      >
        {label}
      </label>
      <span className={error && error.length > 0 ? 'bar error-bar' : 'bar'}>
        &nbsp;
      </span>
      {required ? <span className="required-label"> * required</span> : null}
      {/* when user exeed maxlength value, display warning message */}
      {maxlength && maxlength === inputValue.length ? (
        <span className="input-warning">
          Max characters can be entered are: {maxlength}
        </span>
      ) : null}
    </StyledinputGroup>
  );
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.array,
  type: PropTypes.string,
  required: PropTypes.bool,
  max: PropTypes.string,
  maxlength: PropTypes.number,
  disabled: PropTypes.any,
};

const StyledinputGroup = styled.div`
  position: relative;
  margin: 45px 0;
  width: 100%;
  background: #f5f5f5;
  ${({ error }) =>
    error &&
    `
  `}
  border-radius: 4px 4px 0 0;
  height: 56px;
`;

export default FormInput;
