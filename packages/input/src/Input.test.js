import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import jsdom from 'jsdom-global';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


jsdom();
Enzyme.configure({adapter: new Adapter()});
import Input from './Input';

const onFieldChangeSpy = sinon.spy();

const defaultProps = {
    name: 'testInput',
    onFieldChange: onFieldChangeSpy,
};

test('should render an input with input-icon class', t => {
    t.plan(1);

    const wrapper = mount(<Input {...defaultProps}/>);

    t.true(
        wrapper.find('.input-icon').hostNodes().exists(),
    );
});




