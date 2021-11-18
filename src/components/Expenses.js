import ExpenseItems from './ExpenseItems';
import './Expenses.css';
import Card from './Card';

function Expenses(props) {
    
    return(
        <card className='expenses'>
            <ExpenseItems 
            title = {props.items[0].title} 
            amount = {props.items[0].amount} 
            Date = {props.items[0].Date}>

            </ExpenseItems>
            <ExpenseItems 
            title ={props.items[1].title} 
            amount = {props.items[1].amount} 
            Date = {props.items[1].Date}>
        
            </ExpenseItems>
            <ExpenseItems 
            title ={props.items[2].title} 
            amount = {props.items[2].amount} 
            Date = {props.items[2].Date}>
                
            </ExpenseItems>
            <ExpenseItems 
            title ={props.items[3].title} 
            amount = {props.items[3].amount} 
            Date = {props.items[3].Date}>
                
            </ExpenseItems>
        </card>
    );
}
export default Expenses;