import React, { useState } from "react";
import "./Expenses.css";

import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectHandler = (selectedOption) => {
    setFilteredYear(selectedOption);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelect={selectHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
      </div>
    </div>
  );
}

export default Expenses;
