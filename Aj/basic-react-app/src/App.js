import './App.css';
import expenseData from './components/Expenses/ExpenseData';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    const onExpenseAddedHandler = (event) => {
        console.log("Event from app.js ", event)
    }
    return (
        <>
            <NewExpense onExpenseAdded={onExpenseAddedHandler}></NewExpense>
            <Expenses data={expenseData} />
        </>

    );
}

export default App;
