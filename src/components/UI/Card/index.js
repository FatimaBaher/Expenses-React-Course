import "../../Expenses/Expenses.css"
import '../../Expenses/ExpenseItem.css';
import "./Card.css"



function Card({className = "", children, onClick=()=>{}}){
    const classes = "card " + className;
    return (
        <div className= {classes} onClick={onClick}>
            {children}

        </div>
    )
}

export default Card;