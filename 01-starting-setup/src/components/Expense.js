import './Expense.css'
import ExpenseItem from "./ExpenseItem";

function Expense(props){
    return (
      <div className="expenses">
        <ExpenseItem ele={props.element[0]}/>
        <ExpenseItem ele={props.element[1]}/>
        <ExpenseItem ele={props.element[2]}/>
      </div>
    );
}

export default Expense