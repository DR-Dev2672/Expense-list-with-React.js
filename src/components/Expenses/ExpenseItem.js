import React from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card.js';

import ExpenseDate from './ExpenseDate.js';




export default function ExpenseItem(props){
//     const [title,setTitle] = useState(props.title);
 

// const clickHandler=()=>{
//     setTitle('Updated!');
//     console.log(title);
// };
 
    return(
        <Card className='expense-item'>
         <ExpenseDate date={props.date}></ExpenseDate>
         <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>change title</button> */}
         </Card>
    );          
}
