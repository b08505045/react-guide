import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => { // props holds all received attributes as properties 
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.ele.date}/>
            <div className="expense-item__description">
              <h2>{props.ele.title}</h2>
              <div className="expense-item__price">${props.ele.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;