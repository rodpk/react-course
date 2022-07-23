import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {

  console.log(props.items)
    if (props.items.length === 0) {
      console.log("Hello world");
      return <h2 className="expenses-list__fallback"> Found no expenses.</h2>
    }

    return <ul className = "expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
      }
    </ul>
}


export default ExpensesList;