import Expenses from "./components/Expenses";
import React, { useState }from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const Dummyexpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

  const [expense, setExpense]= useState(Dummyexpenses);


  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const divStyle = {
    margin: "60px",
  };

  return (
    <div>
      <h2 style={divStyle}>Expense Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expense} />
    </div>

    // Alternative way for writting JSX code using React library
    // The JSX code written above will be converted to below code before compiling in browser

    // React.createElement(
    //   "div",
    //   {},
    //   React.createElement(NewExpense, {},),
    //   React.createElement(Expenses, { items: expenses })
    // )
  );
}

export default App;
