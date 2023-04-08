import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card"
import { useEffect, useState } from 'react';
import Popup from "../UI/Popup";

function ExpenseItem({date, title, amount}){
    const [isOpen, setIsOpen] = useState(false);
    const [counter, setCounter] = useState(amount);
    function onClickHandler(){
        setIsOpen(true);
    }
    function close(){
        setIsOpen(false);
    }
    useEffect(() => {})
    return (
        <>
            <Card className='expense-item' onClick= {()=>onClickHandler()}>
                <ExpenseDate date={date}/>
                <div  className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>$ {counter}</div>
                    <button onClick={() => setCounter(counter+1)}>Increment</button>
                </div>
            </Card>
            <Popup isOpen={isOpen} close={close} amount={amount}>
                <p>{counter}</p>
            </Popup>
        </>
    );
}

export default ExpenseItem;