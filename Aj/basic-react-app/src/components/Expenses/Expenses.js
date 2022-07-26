import ExpenseItem from '../ExpenseItem/ExpenseItem';
import "./Expenses.css";

function Expenses(props) {
    const expenseData = props.data;
    return <div className="expenses">
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
    </div>
}

export default Expenses;