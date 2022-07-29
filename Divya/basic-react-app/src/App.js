import './App.css';
import expenseData from './components/ExpenseItem/ExpenseData';
import Expenses from './components/Expenses/Expenses'
function App() {
    return (
        <>
            <Expenses data={expenseData} />
        </>

    );
}

export default App;
