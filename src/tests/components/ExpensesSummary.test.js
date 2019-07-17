import React from 'react';  
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with no expenses correctly', () =>{
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with one expense correctly', () =>{
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={234}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses correctly', () =>{
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={23456456345}/>);
    expect(wrapper).toMatchSnapshot();
});