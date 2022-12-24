import { useState } from 'react';
import './App.css';
import expenseData from './components/Expenses/ExpenseData';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const [data, setData] = useState(expenseData);
    const onExpenseAddedHandler = (event) => {
        console.log("Event from app.js ", event)
        setData(x => [...x, event])
    }

    return (
        <>
            <NewExpense onExpenseAdded={onExpenseAddedHandler}></NewExpense>
            <Expenses data={data} />
        </>

    );
}

export default App;
