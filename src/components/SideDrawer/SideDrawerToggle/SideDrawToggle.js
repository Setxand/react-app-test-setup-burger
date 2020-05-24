import React from "react";
import "./SideDrawToggle.css"
import MenuIcon from "../../../assets/images/menu.jpg"

const sideDrawToggle = props => (
	<div className={"SideDrawToggle"} onClick={props.clicked}>
		{/*<img src={MenuIcon} alt={"menuIcon"}/>*/}
		<div></div>
		<div></div>
		<div></div>
	</div>
)

export default sideDrawToggle;