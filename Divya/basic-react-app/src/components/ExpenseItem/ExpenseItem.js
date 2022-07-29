import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

import "./ExpenseItem.css";
import Card from "../Card/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log("Evaluated by ExpenseItem");
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  //const title = props.title;
  const expenseAmount = props.amount;
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <h2>{title}</h2>
        <div className="expense-item-price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
