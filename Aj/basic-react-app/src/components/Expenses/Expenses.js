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

        {
            props.data.map(item =>
                <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date} />)
        }
    </Card>
}

export default Expenses;