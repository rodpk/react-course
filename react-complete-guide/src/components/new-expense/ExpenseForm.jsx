import './ExpenseForm.css';
import { useState } from 'react';
function ExpenseForm(props) {

    // multiple states
    const [enteredTitle, setEnteredTitle] = useState();
    const [enteredAmount, setEnteredAmount] = useState();
    const [enteredDate, setEnteredDate] = useState();


    // one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // need to update other inputs too
        // setUserInput({ ...userInput, enteredTitle: event.target.value });

        // if you use the aproach above, it may use an outdated state
        // in this aproach, it will be alwways the latest aproach [safest]
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({ ...userInput, enteredAmount: event.target.value });

    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({ ...userInput, enteredDate: event.target.value });

    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');


    };

    return (
        <form onSubmit={ submitHandler }>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>

                    <label>Title</label>
                    <input type="text"  value = { enteredTitle } onChange = { titleChangeHandler } />

                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value = { enteredAmount } onChange={amountChangeHandler} />

                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"  value = { enteredDate }onChange={dateChangeHandler} />

                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;