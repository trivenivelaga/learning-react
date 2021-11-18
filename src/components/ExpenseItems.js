import Expenses from './Expenses';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItems.css';

function ExpenseItems(props) {
    
    return (
        <card className = "expense-item">
         <ExpenseDate Date= {props.Date}/>   
            
        <div className = "expense-item__description">
    <h2>{props.title}</h2>
    <div className= "expense-item__price">{props.amount}</div>
            </div>
        </card>
    );
}
export default ExpenseItems;