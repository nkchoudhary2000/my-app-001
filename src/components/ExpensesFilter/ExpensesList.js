import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "../Expenses/ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found!!!</h2>;
  }

  return props.items.map((expense) => (
    <ul className="expenses-list">
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </ul>
  ));
};

export default ExpensesList;
