import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export class ExpensesSummary extends React.Component {
    render () {
        return (
            <div>
                <p>Count: {this.props.expensesCount}</p>
                {<p>Total: {numeral(this.props.expensesTotal / 100).format('$0,0.00')}</p>}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        expensesCount: selectExpenses(state.expenses, state.filters).length,
        expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
    };
};

export default connect(mapStateToProps)(ExpensesSummary);