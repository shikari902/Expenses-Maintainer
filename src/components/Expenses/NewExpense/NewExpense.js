import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const SavedDataHandler = (enteredExpenseData) => {
    const enteredExpense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(enteredExpense);

    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={SavedDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
