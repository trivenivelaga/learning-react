import React, { useState } from 'react';
import './UserForm.css';
import Card from './UI/Card';
import Button from './UI/Button';
import ErrorModal from './UI/ErrorModal';

const UserForm = (props) => {
	const [enteredname, setEnteredName] = useState('');
	const [enteredage, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};
	const SubmitHandler = (event) => {
		event.preventDefault();
		if (enteredage.trim().length === 0 || enteredname.trim().length === 0) {
			setError({
				title: 'InvalidInput',
				message: 'plase enter a valid name and age (non-emptyvalues)',
			});
			return;
		}
		if (+enteredage < 1) {
			setError({
				title: 'InvalidAge',
				message: 'plase enter a valid age (> 0)',
			});
			return;
		}
		props.onuserForm(enteredname, enteredage);
		setEnteredName('');
		setEnteredAge('');
	};
	const errorHandler = () => {
		setError(null);
	};
	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card>
				<form onSubmit={SubmitHandler}>
					<div className='user-forms'>
						<div className='user-form'>
							<label>UserName</label>
							<input
								type='text'
								value={enteredname}
								onChange={nameChangeHandler}></input>
						</div>
						<div className='user-form'>
							<label>Age(Years)</label>
							<input
								type='number'
								value={enteredage}
								onChange={ageChangeHandler}></input>
						</div>
						<div className='user-form__actions'>
							<Button type='submit'> Add User </Button>
						</div>
					</div>
				</form>
			</Card>
		</div>
	);
};
export default UserForm;
