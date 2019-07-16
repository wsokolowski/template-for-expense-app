import { editExpense, addExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abs' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abs'
    });
});


test('should setup edit expense action obj', () => {
    const action = editExpense('1234esd', { note: 'new note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234esd',
        updates: { note: 'new note value' }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last month rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action obj with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    })
});