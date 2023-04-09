import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({onTitleChange, onDateChange, onAmountChange, onSubmit}) =>{
    return (
        <div className="new-expense">
            <ExpenseForm onTitleChange= {onTitleChange} onDateChange= {onDateChange} onAmountChange= {onAmountChange} onSubmit= {onSubmit}/>
        </div>
    );
}

export default NewExpense;