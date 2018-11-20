import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import jsdom from 'jsdom-global';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jsdom();
Enzyme.configure({adapter: new Adapter()});

import PasswordInput from './PasswordInput';

const onFieldChangeSpy = sinon.spy();

const defaultProps = {
    name: 'testInput',
    onFieldChange: onFieldChangeSpy,
};

test('should render an input with an icon eye', t => {
    t.plan(1);

    const wrapper = mount(<PasswordInput {...defaultProps}/>);

    t.true(
        wrapper.find('.passwordEye').hostNodes().exists(),
    );
});

test('should render an input with type equal to password', t => {
    t.plan(1);
    const wrapper = mount(<PasswordInput {...defaultProps}/>);

    t.is(
        wrapper.find('input').props().type,
        'password',
    );
});

test('should render an input without an icon eye', t => {
    t.plan(1);

    const wrapper = mount(<PasswordInput {...defaultProps} iconEye={false}/>);
    t.false(
        wrapper.find('.passwordEye').hostNodes().exists(),
    );
});

test('should render an input with type equal to text after click on eyeIcon', t => {
    t.plan(2);
    const wrapper = mount(<PasswordInput {...defaultProps} />);

    wrapper.find('.passwordEye').simulate('click');
    t.true(wrapper.state('isDisplayPassword'));
    t.is(wrapper.find('input').props().type, 'text');
});

test('should render an input with type equal to password after two clicks on eyeIcon', t => {
    t.plan(2);
    const wrapper = mount(<PasswordInput {...defaultProps} />);

    wrapper.find('.passwordEye').simulate('click').simulate('click');
    t.false(wrapper.state('isDisplayPassword'));
    t.is(wrapper.find('input').props().type, 'password');
});


