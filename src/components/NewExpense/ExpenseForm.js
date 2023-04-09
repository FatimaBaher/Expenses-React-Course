import "./ExpenseForm.css"

const ExpenseForm = ({onTitleChange, onDateChange, onAmountChange, onSubmit}) => {
    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={onTitleChange}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={onAmountChange}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-01" max="2024-12-31" onChange={onDateChange}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={onSubmit}>Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;