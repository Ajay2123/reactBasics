import ExpenseDate from '../ExpenseDate/ExpenseDate'
import './ExpenseItem.css'
import Card from '../Card/Card';

function ExpenseItem(props) {
    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item-description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item-price">${expenseAmount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;