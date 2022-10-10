import './App.css';
import expenseData from './components/Expenses/ExpenseData';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

function App() {

    return (
        <>
            <NewExpense></NewExpense>
            <Expenses data={expenseData} />
        </>

    );
}

export default App;
