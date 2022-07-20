import './ExpenseItem.css'
function ExpenseItem(props) {
    // Date
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()

    const expenseTitle = props.title;
    const expenseAmount = props.amount;
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item-description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item-price">${expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;