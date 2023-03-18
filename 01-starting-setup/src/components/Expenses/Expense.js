import './Expense.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

const Expense = (props) => {
    return (
      <Card className="expenses">
        <ExpenseItem ele={props.element[0]}/>
        <ExpenseItem ele={props.element[1]}/>
        <ExpenseItem ele={props.element[2]}/>
      </Card>
    );
}

export default Expense