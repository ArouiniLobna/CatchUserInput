/**
 *
 * Tests for FormInput
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { mount } from 'enzyme';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import FormInput from '../index';

describe('<FormInput />', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      name: 'comments',
      label: 'Comments',
      value: '',
      // type: 'text',
      onChange: jest.fn(() => 'handleChange'),
    };
    wrapper = mount(<FormInput {...props} />);
  });
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<FormInput {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('trigger onChange handler when typing some text to the input field', () => {
    wrapper.find('input').simulate('change');
    expect(props.onChange).toHaveBeenCalled();
  });

  it('contains a label with for attribute set to props.name and text set to props.label', () => {
    const label = wrapper.find('label');
    expect(label.text()).toEqual('Comments');
    expect(label.props().htmlFor).toEqual('comments');
  });

  it('when type not provided, default type should be set to text', () => {
    const input = wrapper.find('input');
    expect(input.props().type).toEqual('text');
  });

  it('when maxlength (props) set to value, the input maxLength should be set to same value ', () => {
    wrapper.setProps({ maxlength: 2 });
    expect(wrapper.find('input').props().maxLength).toBe(2);
    // as per maxLengtth implemetation and restrictions, we can't test it is functionality implementation
    // https://stackoverflow.com/questions/52102946/unable-to-test-maxlength-with-mock-input-enzyme
  });

  it('when input type = date, the label should be floating.', () => {
    wrapper.setProps({ type: 'date' });
    expect(wrapper.find('label').hasClass('floating-label')).toBe(true);
  });
  it('when input has valid value, the label should be floating.', () => {
    wrapper.find('input').simulate('change', { target: { value: 'Hello' } });
    expect(wrapper.find('label').hasClass('floating-label')).toBe(true);
  });
  it('when error is truthy, the label should have label-error class', () => {
    wrapper.setProps({ error: [{ Name: 'comments', Value: 'error occured' }] });
    expect(wrapper.find('label').hasClass('label-error')).toBe(true);
  });
  it('when error is truthy, the .bar should have error-bar class', () => {
    wrapper.setProps({ error: [{ Name: 'comments', Value: 'error occured' }] });
    expect(wrapper.find('.bar').hasClass('error-bar')).toBe(true);
  });
  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<FormInput {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
