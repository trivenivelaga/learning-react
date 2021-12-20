import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AuthorQuiz from './AuthorQuiz';
// import LoginPage from './Form';
// import reportWebVitals from './reportWebVitals';
// import BrowserIP from './IpAddress';
//  import NewUserForm from './PracticeEx/NewUserForm';
import App from './FoodApp/App';

//  ReactDOM.render(
//   <React.StrictMode>
//     <LoginPage/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ReactDOM.render(
// 	<React.StrictMode>
// 		<BrowserIP />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
// ReactDOM.render(
// 	<React.StrictMode>
// 		<NewUserForm />
// 	</React.StrictMode>,
// 	document.getElementById('root')
// );
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
//ReactDOM.render(<AuthorQuiz/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
