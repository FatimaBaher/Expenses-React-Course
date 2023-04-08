import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import Popup from "../UI/Popup";
import { useState } from "react";

function Expenses({items}){    
    const [newList, setNewList] = useState(items);
    const [amount, setAmount] = useState();
    let list;
    function deleteElement(index){   
        list = [...newList];    
        list.splice(index,1);
        console.log(list);
        setNewList(list);
    }
    
    return (
        <>
            <Card className="expenses">
            {newList.map((el,i) => <ExpenseItem title= {el.title} amount={el.amount} date= {el.date} onDelete={()=>deleteElement(i)}/> )} 
            </Card>
            
        </>        
    )
}

export default Expenses;

