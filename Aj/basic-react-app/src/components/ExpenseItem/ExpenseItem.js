import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'

function ExpenseItem(props) {
    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item-description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item-price">${expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;