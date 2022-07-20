import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');

    console.log(props);
    function handleChangeDropdown(selectedYear) {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected = { filteredYear } onChangeFilter = { handleChangeDropdown }/>
                {
                    props.items.map(expense => <ExpenseItem title = {expense.title} amount = {expense.amount} date = {expense.date}/>)
                }
            </Card>
        </div>
    );
}

export default Expenses;