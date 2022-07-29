import "./ExpenseForm.css"
import { useState } from "react"

const ExpenseForm = () => {

    const [value, setValue] = useState({
        titleValue: '',
        amountValue: '',
        dateValue: '',
    });

    const titleChangeHandler = (event) => {
        setValue({
            ...value,
            titleValue: event.target.value
        })
        console.log("titleValue: ", value.titleValue)
    }
    const amountChangeHandler = (event) => {
        setValue({
            ...value,
            amountValue: event.target.value
        })
        console.log("amountValue: ", value.amountValue)
    }
    const dateChangeHandler = (event) => {
        setValue({
            ...value,
            dateValue: event.target.value
        })
        console.log("dateValue: ", value.dateValue)
    }


    return (
        <form className="new-expense-controls ">
            <div className="new-expense-control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className="new-expense-control">
                <label>Amount</label>
                <input type='number' min="0.5" step="0.5" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense-control">
                <label>Date</label>
                <input type='Date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
            </div>
            <div className="new-expense-actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;