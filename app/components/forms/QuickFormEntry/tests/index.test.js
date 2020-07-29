/**
 *
 * Tests for QuickFormEntry
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { mount } from 'enzyme';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect'; // add some helpful assertions
import { act } from 'react-dom/test-utils';
import moment from 'moment';
import FormInput from 'components/layouts/atoms/FormInput';

import QuickFormEntry from '../index';

describe('<QuickFormEntry />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      onSubmit: jest.fn(() => 'onSubmit'),
    };
    wrapper = mount(<QuickFormEntry {...props} />);
  });
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<QuickFormEntry {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to render 3 FormInput', () => {
    expect(wrapper.find(FormInput).length).toBe(3);
  });

  it('Expect to render a FormInput for name with maxLength set to 20 and label set to Full Name', () => {
    const nameInput = wrapper.find(FormInput).at(0);
    expect(nameInput.props().name).toEqual('name');
    expect(nameInput.props().label).toEqual('Full Name');
    expect(nameInput.props().maxlength).toEqual(20);
  });

  it('Expect to render a FormInput for salary with label set to Salary and type = number', () => {
    const nameInput = wrapper.find(FormInput).at(1);
    expect(nameInput.props().name).toEqual('salary');
    expect(nameInput.props().label).toEqual('Salary');
    expect(nameInput.props().type).toEqual('number');
  });

  it('Expect to render a FormInput for age with label set to Date Of Birth and type = date and max date to today', () => {
    const nameInput = wrapper.find(FormInput).at(2);
    expect(nameInput.props().name).toEqual('age');
    expect(nameInput.props().label).toEqual('Date Of Birth');
    expect(nameInput.props().type).toEqual('date');
    expect(nameInput.props().max).toEqual(moment().format('YYYY-MM-DD'));
  });

  it('Expect the Submit button to be disabled when all fields are empty', () => {
    const { getByText } = render(<QuickFormEntry {...props} />);
    expect(getByText('Submit').closest('button')).toHaveAttribute('disabled');
  });
  it('Expect the Submit button to be active when all fields got values', () => {
    const nameInput = wrapper.find(FormInput).at(0);
    const salaryInput = wrapper.find(FormInput).at(1);
    const ageInput = wrapper.find(FormInput).at(2);
    act(() => {
      nameInput.props().onChange({ target: { value: 'Hello', name: 'name' } });
      salaryInput.props().onChange({ target: { value: 1111, name: 'salary' } });
      ageInput
        .props()
        .onChange({ target: { value: '2020-07-15', name: 'age' } });
    });
    wrapper.update();
    expect(wrapper.find('button').props().disabled).toBe(false);
  });
  it('Expect the Submit button to be disbaled when only one field eneterd', () => {
    const nameInput = wrapper.find(FormInput).at(0);
    act(() => {
      nameInput.props().onChange({ target: { value: 'Hello', name: 'name' } });
    });
    wrapper.update();
    expect(wrapper.find('button').props().disabled).toBe(true);
  });
  it('Expect the Submit button to be disabled when two fields got values', () => {
    const nameInput = wrapper.find(FormInput).at(0);
    const salaryInput = wrapper.find(FormInput).at(1);
    act(() => {
      nameInput.props().onChange({ target: { value: 'Hello', name: 'name' } });
      salaryInput.props().onChange({ target: { value: 1111, name: 'salary' } });
    });
    wrapper.update();
    expect(wrapper.find('button').props().disabled).toBe(true);
  });

  it('when Submit button clicked, with valid inputs no errors, trigger props.onSubmit()', () => {
    const nameInput = wrapper.find(FormInput).at(0);
    const salaryInput = wrapper.find(FormInput).at(1);
    const ageInput = wrapper.find(FormInput).at(2);
    act(() => {
      nameInput.props().onChange({ target: { value: 'Hello', name: 'name' } });
      salaryInput.props().onChange({ target: { value: 1111, name: 'salary' } });
      ageInput
        .props()
        .onChange({ target: { value: '2020-07-15', name: 'age' } });
    });
    wrapper.update();
    const button = wrapper.find('button');
    expect(button.props().disabled).toBe(false);
    button.simulate('submit');
    expect(wrapper.props().onSubmit).toHaveBeenCalled();
  });
  it('when Submit button clicked, with not a valid name input (1 character only) , dont trigger props.onSubmit()', () => {
    const nameInput = wrapper.find(FormInput).at(0);
    const salaryInput = wrapper.find(FormInput).at(1);
    const ageInput = wrapper.find(FormInput).at(2);
    act(() => {
      nameInput.props().onChange({ target: { value: 'A', name: 'name' } });
      salaryInput.props().onChange({ target: { value: 1111, name: 'salary' } });
      ageInput
        .props()
        .onChange({ target: { value: '2020-07-15', name: 'age' } });
    });
    wrapper.update();
    const button = wrapper.find('button');
    expect(button.props().disabled).toBe(false);
    button.simulate('submit');
    expect(wrapper.props().onSubmit).not.toHaveBeenCalled();
  });
  it('when Submit button clicked, with not a valid name input (1 character only) , error messah=ge should display', () => {
    const nameInput = wrapper.find(FormInput).at(0);
    const salaryInput = wrapper.find(FormInput).at(1);
    const ageInput = wrapper.find(FormInput).at(2);
    act(() => {
      nameInput.props().onChange({ target: { value: 'A', name: 'name' } });
      salaryInput.props().onChange({ target: { value: 1111, name: 'salary' } });
      ageInput
        .props()
        .onChange({ target: { value: '2020-07-15', name: 'age' } });
    });
    wrapper.update();
    const button = wrapper.find('button');
    expect(button.props().disabled).toBe(false);
    button.simulate('submit');
    expect(wrapper.find('.error-message').length).toBe(1);
    expect(
      wrapper
        .find('.error-message')
        .at(0)
        .text(),
    ).toBe('Minimum characters are 2');
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<QuickFormEntry />);
    expect(firstChild).toMatchSnapshot();
  });
});
