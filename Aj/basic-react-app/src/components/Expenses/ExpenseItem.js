import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../Card/Card';

const ExpenseItem = (props) => {
    let [amount, setAmount] = useState(props.amount);
    const clickHandler = () => setAmount(amount += 1);

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item-description">
                <h2>{props.title}</h2>
                <div className="expense-item-price">${amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
        </Card>
    )
}

export default ExpenseItem;