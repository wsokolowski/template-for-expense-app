import moment from 'moment';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should correctly add up multiple expenses', () => {
    const sum = selectExpensesTotal(expenses);
    expect(sum).toBe(114195);
});

test('should return 0 if no expenses', () => {
    const sum = selectExpensesTotal([]);
    expect(sum).toBe(0);
});

test('should correctly add up a single expense', () => {
    const sum = selectExpensesTotal([expenses[1]]);
    expect(sum).toBe(109500);
});