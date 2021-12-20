import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
// import Card from './UI/Card';

const NewUserForm = () => {
	const [userList, setuserList] = useState([]);
	const userFormHandler = (uName, uAge) => {
		setuserList((pervUserList) => {
			return [
				...pervUserList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	};
	return (
		<div className='newuser-form'>
			<UserForm onuserForm={userFormHandler} />
			<UserList users={userList} />
		</div>
	);
};
export default NewUserForm;
