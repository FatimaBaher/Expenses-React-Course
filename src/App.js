import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [items, setItems] = useState(expenses);
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState(new Date());
  const [amountInput, setAmountInput] = useState("0"); 

  function onTitleChange(e){
    setTitleInput(e.target.value);
    console.log("title changed")
    console.log(e.target.value)
  }
  function onDateChange(e){
    setDateInput(e.target.value);
    console.log("date changed")
    console.log(e.target.value)

  }
  function onAmountChange(e){
    setAmountInput(e.target.value);
    console.log("amount changed")
    console.log(e.target.value)
  }

  function onSubmit(){
    console.log("submitted");
    let newItem = { title: titleInput, date: new Date(dateInput), amount: amountInput};
    let newList = [...items];
    newList.push(newItem);
    console.log(newList);
    setItems(newList);
    
  }
  console.log("started");
  return (
    <div>
      <NewExpense onTitleChange= {onTitleChange} onDateChange= {onDateChange} onAmountChange= {onAmountChange} onSubmit= {onSubmit}/>
      <Expenses items={items}/>
    </div>
  );
}

export default App;
