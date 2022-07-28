import './App.css';
import expenseData from './components/Expenses/ExpenseData';
import Expenses from './components/Expenses/Expenses'
function App() {
    return (
        <>
            <Expenses data={expenseData} />
        </>

    );
}

export default App;
