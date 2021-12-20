import React, { useState } from 'react';
//import ExpenseItems from './ExpenseItems';
import './Expenses.css';
import Card from '../UI/Card';
//import ExpensesFilter from './ExpenseFilter';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020');
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.Date.getFullYear().toString() === filteredYear;
	});
	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList items={filteredExpenses} />
				{/* <ExpenseItems
					title={props.items[0].title}
					amount={props.items[0].amount}
					Date={props.items[0].Date}></ExpenseItems>
				<ExpenseItems
					title={props.items[1].title}
					amount={props.items[1].amount}
					Date={props.items[1].Date}></ExpenseItems>
				<ExpenseItems
					title={props.items[2].title}
					amount={props.items[2].amount}
					Date={props.items[2].Date}></ExpenseItems>
				<ExpenseItems
					title={props.items[3].title}
					amount={props.items[3].amount}
					Date={props.items[3].Date}></ExpenseItems> */}
			</Card>
		</div>
	);
};
export default Expenses;
