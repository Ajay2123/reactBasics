import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = () => {

    const [currentValue, setValue] = useState({
        titleValue: '',
        amountValue: '',
        dateValue: '',
    });

    const titleChangeHandler = (event) => {
        setValue((prevState) => {
            return { ...prevState, titleValue: event.target.value }
        })
    }
    const amountChangeHandler = (event) => {
        setValue((prevState) => {
            return { ...prevState, amountValue: event.target.value }
        })
    }
    const dateChangeHandler = (event) => {
        setValue((prevState) => {
            return { ...prevState, dateValue: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: currentValue.titleValue,
            amount: currentValue.amountValue,
            date: new Date(currentValue.dateValue)
        }
        console.log(expenseData)
        setValue((prevState) => {
            return {
                ...prevState,
                titleValue: '',
                amountValue: '',
                dateValue: ''
            }
        })
    }
    return (
        <form className="new-expense-controls" onSubmit={submitHandler}>
            <div className="new-expense-control" >
                <label>Title</label>
                <input type='text' value={currentValue.titleValue} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense-control">
                <label>Amount</label>
                <input type='number' min="0.5" step="0.5" value={currentValue.amountValue} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense-control">
                <label>Date</label>
                <input type='Date' min="2019-01-01" value={currentValue.dateValue} max="2022-12-31" onChange={dateChangeHandler} />
            </div>
            <div className="new-expense-actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;