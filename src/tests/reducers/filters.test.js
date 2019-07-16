import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    });
});

test('should set sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    });
});

test('should set sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    // expect(state).toEqual({
    //     text: '',
    //     sortBy: 'date',
    //     startDate: undefined,
    //     endDate: undefined
    // });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'something in';
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text});
    // expect(state).toEqual({
    //     text,
    //     sortBy: 'date',
    //     startDate: undefined,
    //     endDate: undefined
    // });
    expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
    const startDate = moment(0).subtract(2, 'days');
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate });
    // expect(state).toEqual({
    //     text: '',
    //     sortBy: 'date',
    //     startDate: moment(0).subtract(2, 'days'),
    //     endDate: undefined
    // });
    expect(state.startDate).toEqual(startDate);
});

test('should set endDate filter', () => {
    const endDate = moment(0).add(5, 'days');
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate });
    // expect(state).toEqual({
    //     text: '',
    //     sortBy: 'date',
    //     startDate: undefined,
    //     endDate: moment(0).add(5, 'days')
    // });
    expect(state.endDate).toEqual(endDate);
});