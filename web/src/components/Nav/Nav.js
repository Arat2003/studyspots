import React from "react";
import "./Nav.css";

const Nav = () => {
	return (
		<header>
			<nav>
				<div className={`nav__item`}>
					{/* button to add review, hidden if user is not logged in */}
				</div>
				<div className="nav__item">{/* search input */}</div>
				<div className={`nav__item`}>{/* sign in button */}</div>
			</nav>
		</header>
	);
};

export default Nav;
