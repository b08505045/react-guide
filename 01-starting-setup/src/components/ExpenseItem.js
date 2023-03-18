import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) { // props holds all received attributes as properties 
    return (
        <div className="expense-item">
            <ExpenseDate date={props.ele.date}/>
            <div className="expense-item__description">
              <h2>{props.ele.title}</h2>
              <div className="expense-item__price">${props.ele.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;