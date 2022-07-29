import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import expenseData from './components/ExpenseItem/ExpenseData';
import Expenses from './components/Expenses/Expenses'
function App() {
    return (
        <div>
            <NewExpense/>
            <Expenses data={expenseData} />
        </div>

    );
}

export default App;
