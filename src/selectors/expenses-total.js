const selectExpensesTotal = (expenses) => {
    if (expenses.length > 0) {
        return expenses
        .map((expense) => expense.amount)
        .reduce((previousValue, currentValue) => previousValue + currentValue);
    } else {
        return 0;
    }
};

export default selectExpensesTotal;