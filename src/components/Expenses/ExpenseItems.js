// /import Expenses from './Expenses';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css';

const ExpenseItems = (props) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate Date={props.Date} />

			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>{props.amount}</div>
			</div>
		</Card>
	);
};
export default ExpenseItems;