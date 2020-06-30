import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import styled from 'styled-components'
import 'jest-styled-components'
import Form from '../../components/form/form.js';

describe('<Form/>', () => {
  
  it('changes state on click', () => {
    const form = mount(<Form />);
    const button = form.find('#get');
    button.simulate('click');
    const text = form.find('label input');
    text.simulate('change', {target: {value: 'abcdefghijk'}});
    console.log(form.state('url'));
    expect(form.state('url')).toBe('abcdefghijk');
    expect(form.state('method')).toBe('get');
    expect(form.find('section .method').exists()).toBeTruthy();
    expect(form.find('section .url').exists()).toBeTruthy();
  });
  it('is alive at application start', () => {
    const form1 = shallow(<Form />);
    const form = mount(<Form />);
    const button = form.find('#get');
    button.simulate('click');
    const text = form.find('label input');
    text.simulate('change', {target: {value: 'abcdefghijk'}});
    console.log(form.state('url'));
    
    const go = form.find('label button');
    go.simulate('submit');
    // expect(thing.find('#me').exists()).toBeTruthy();
    // expect(thing.find('p').exists()).toBeTruthy();
    // expect(form.state('url')).toBe('abcdefghijk');
    expect(form.state('request').url).toBe('abcdefghijk');
    expect(form.state('request').method).toBe('get');
    // console.log(form1.find('.url'));
    expect(form1.find('.url').exists()).toBe(true);
  });
  
  it(' clear the form/state after the form is submitted?', () => {
    const form1 = shallow(<Form />);
    const form = mount(<Form />);
    const button = form.find('#get');
    button.simulate('click');
    const text = form.find('label input');
    text.simulate('change', {target: {value: 'abcdefghijk'}});
    console.log(form.state('url'));
    const go = form.find('form');
    go.simulate('submit');
    expect(form.state('url')).toBe('');
    expect(form.state('method')).toBe('');

   ;
  });
  it(' method selectors/checkboxes obey your styling rules', async() => {
    const form1 = shallow(<Form />);
    const form = mount(<Form />);
    const button = form.find('#get');
    button.simulate('click');
    const tree = await renderer.create(<Form />).toJSON()
    await console.log(tree);
    // const headerClass = Form().type.styledComponentId
    // const style = window.getComputedStyle(MyHeaderRoots)
    // const MyHeaderRoots = new form.find('#get');
    // console.log(form1.find('#get').get(0).props);
    // expect(style.background).toBe('#fff')
    // console.log(form1.find('#get').get(0).style);
    expect(tree).toHaveStyleRule('background');
    // const headerClass = Form().type.styledComponentId
    // const MyHeaderRoots = form.find('#get');
    // const style = window.getComputedStyle(MyHeaderRoots)
    // expect(style.background).toBe('#fff')
    // expect(style.top).toBe('0px')


   ;
  });
//   it('Renders correctly', () => {
//     const tree = renderer.create(<Form />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
});