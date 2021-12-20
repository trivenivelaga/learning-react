import React, { Fragment } from 'react';
// import Food from './src/FoodApp/components/images/Food.jpeg';
const Header = () => {
	return (
		<Fragment>
			<header>
				<h1>Meals</h1>
				<button>Cart</button>
			</header>
			<div>
				{/* <img src={Food} alt='' width='300' height='300' /> */}
			</div>
		</Fragment>
	);
};
export default Header;
