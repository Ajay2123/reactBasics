import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import expensesData from './components/ExpenseItem/ExpensesData'
function App() {
    return (
        <>
            <ExpenseItem
                title={expensesData[0].title}
                amount={expensesData[0].amount}
                date={expensesData[0].date} />
            <ExpenseItem
                title={expensesData[1].title}
                amount={expensesData[1].amount}
                date={expensesData[1].date} />
            <ExpenseItem
                title={expensesData[2].title}
                amount={expensesData[2].amount}
                date={expensesData[2].date} />
            <ExpenseItem
                title={expensesData[3].title}
                amount={expensesData[3].amount}
                date={expensesData[3].date} />
        </>

    );
}

export default App;
