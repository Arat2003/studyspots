import React from "react";
import "./Nav.css";

const Nav = () => {
	return (
		<header>
			<nav>
				<div className={`nav__item`}>
					<a href ="#">Home</a> 
				</div>
				<div className="nav__item"><a href ="../register">Register</a></div>
				<div className={`nav__item`}><a href ="../login">Login</a></div>
			</nav>
		</header>
	);
};

export default Nav;
