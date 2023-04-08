import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card"
import { useEffect, useState } from 'react';
import Popup from "../UI/Popup";

function ExpenseItem({date, title, amount,onDelete}){
    const [isOpen, setIsOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const [inputTitle, setInputTitle] = useState(title);
    function open(){
        setIsOpen(true);
    }
    function close(){
        setIsOpen(false);
    }
    function save(){
        setNewTitle(inputTitle);
        setIsOpen(false);
    }
    function onChangeHandler(e){
        setInputTitle(e.target.value);
    }
    return (
        <>
            <Card className='expense-item'>
                <ExpenseDate date={date}/>
                <div  className='expense-item__description'>
                    <h2>{newTitle}</h2>
                    <div className='expense-item__price'>$ {amount}</div>
                </div>
                <button onClick= {open}>Edit</button>
                <button onClick= {onDelete}>Delete</button>
            </Card>
            <Popup isOpen= {isOpen} close={close}>
                <input placeholder='Enter New Title' value={inputTitle} onChange={onChangeHandler}/>
                <button onClick={save}>Save</button>
            </Popup>
        </>
    );
}

export default ExpenseItem;