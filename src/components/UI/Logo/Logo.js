import React from "react";
import BurgerLogo from "../../../assets/images/burger-logo.png"
import "./Logo.css"

const logo = props => (
	<div className={"Logo"} >
		<img src={BurgerLogo} alt="MyBurger"/>
	</div>
);

export default logo;