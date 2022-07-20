import './ExpenseItem.css'
import Card from '../ui/Card';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

function ExpenseItem(props) {

    const [ title, setTitle ] = useState(props.title);
    // var, and function that updates the value
    // only executed first time
    const clickHandler = () => {
        setTitle('Updated');
        // set new value and the component will be executed again 
        console.log(title)
    }

    console.log(props);
    
    return (

        <Card className='expense-item'>
            <ExpenseDate date = {props.date}/>
            <div className='expense-item__description'>
                <h2> {title} </h2>
                <div className='expense-item__price'>R$ {props.amount} </div>
            </div>

            <button onClick = { clickHandler } > Change Title </button>
        </Card>
    );
}

export default ExpenseItem;