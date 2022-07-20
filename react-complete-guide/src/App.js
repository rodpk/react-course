import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
function App() {  // can be arrow function too

  const [expenses, setExpenses] = useState();
  // const expenses = [
  //   { id: 'e1', title: 'Car Insurance', amount: 235.43, date: new Date(2022, 2, 28) },
  //   { id: 'e2', title: 'Books', amount: 55.11, date: new Date(2022, 3, 18) },
  //   { id: 'e3', title: 'Courses', amount: 25.42, date: new Date(2022, 4, 12) }
  // ];
  setExpenses([
  { id: 'e1', title: 'Car Insurance', amount: 235.43, date: new Date(2022, 2, 28) },
  { id: 'e2', title: 'Books', amount: 55.11, date: new Date(2022, 3, 18) },
  { id: 'e3', title: 'Courses', amount: 25.42, date: new Date(2022, 4, 12) }
  ]);

  function addExpenseHandler(expense) {
    console.log(' In app.js');
    console.log(expense);
    setExpenses(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
