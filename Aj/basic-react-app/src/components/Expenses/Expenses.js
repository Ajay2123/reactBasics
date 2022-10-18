import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../Card/Card';
import "./Expenses.css";
import { useState } from 'react';

function Expenses(props) {
    const expenseData = props.data;
    const [selectedYear, setSelectedYear] = useState("2020");

    const filterByYearHandler = (year) => {
        setSelectedYear(_ => year);
        console.log("Filtering by year :", year)
    }
    return <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onChangeFilter={filterByYearHandler} ></ExpensesFilter>
        <ExpenseItem
            title={expenseData[0].title}
            amount={expenseData[0].amount}
            date={expenseData[0].date} />
        <ExpenseItem
            title={expenseData[1].title}
            amount={expenseData[1].amount}
            date={expenseData[1].date} />
        <ExpenseItem
            title={expenseData[2].title}
            amount={expenseData[2].amount}
            date={expenseData[2].date} />
        <ExpenseItem
            title={expenseData[3].title}
            amount={expenseData[3].amount}
            date={expenseData[3].date} />
    </Card>
}

export default Expenses;