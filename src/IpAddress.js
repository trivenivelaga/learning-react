import React, { useState } from 'react';
//import axios from 'axios';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
/*function BrowserIp() {
    const[ip,setIP] = useState('');

const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)
  }
  
  useEffect( () => {
    getData()

  }, [])

  return (
    <div className="BrowserIp">
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
    </div>
  );
}*/
const Used_Expenses = [
	{
		id: 'e1',
		title: 'Toilet Papers',
		amount: 94.12,
		Date: new Date(2020, 7, 14),
	},
	{ id: 'e2,', title: 'New Tv', amount: 594.32, Date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 100.12,
		Date: new Date(2021, 6, 5),
	},
	{
		id: 'e4',
		title: 'new desk (wooden)',
		amount: 994.03,
		Date: new Date(2021, 5, 12),
	},
];
const BrowserIp = () => {
	const [expenses, setExpenses] = useState(Used_Expenses);

	const addExpenseHandler = (expense) => {
		// console.log('In IpAddress.js');
		// console.log(expense);
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};
	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	);
};

export default BrowserIp;
