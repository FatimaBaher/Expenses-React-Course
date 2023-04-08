import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import Popup from "../UI/Popup";
import { useState } from "react";

function Expenses({items}){    
   
    const [amount, setAmount] = useState();

    
    return (
        <>
            <Card className="expenses">
            {items.map(el => <ExpenseItem title= {el.title} amount={el.amount} date= {el.date} /> )} 
            </Card>
            
        </>        
    )
}

export default Expenses;

