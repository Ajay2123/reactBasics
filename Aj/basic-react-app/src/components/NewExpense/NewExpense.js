import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (expenseData) => {
        const data = { ...expenseData, id: Math.random().toString() };
        console.log("from newExpense component", data)
        props.onExpenseAdded(data)
    }

    return (<div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} ></ExpenseForm>
    </div>)
}

export default NewExpense;