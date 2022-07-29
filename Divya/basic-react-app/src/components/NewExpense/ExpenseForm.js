import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //const [enteredTitle, setEnteredTitle] = useState("");
  //const [enteredAmount, setEnteredAmpunt] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    //setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
    console.log(userInput);
  };
  const amountChangeHandler = (event) => {
    //setEnteredAmpunt(event.target.value);
    setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
      });
      console.log(userInput);
  };
  const dateChangeHandler = (event) => {
    //setEnteredDate(event.target.value);

    setUserInput({
        ...userInput,
        enteredDate: event.target.value,
      });
      console.log(userInput);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
