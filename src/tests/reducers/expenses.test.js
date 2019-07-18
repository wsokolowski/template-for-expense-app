import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expenseReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };

    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
            id: '4',
            description: 'Gasoline',
            note: '',
            amount: 87900,
            createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expenseReducer(expenses, action);
    // expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense]);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const updates = {
        id: '3',
        description: 'Credit Card',
        note: '',
        amount: 2500,
        createdAt: moment(0).add(5, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], updates]);
});

test('should not edit an expense if not found', () => {
    const updates = {
        id: '-1',
        description: 'Credit Card',
        note: '',
        amount: 2500,
        createdAt: moment(0).add(5, 'days').valueOf()
    };
    const action = {
        type: 'EDIT_EXPENSE',
        id: updates.id,
        updates
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});