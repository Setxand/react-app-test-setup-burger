import React from "react";
import Logo from "../UI/Logo/Logo"
import NavigationItems from "../Navigation/NavigationItems/NavigationItems"
import "./SideDrawer.css"
import Backdrop from "../UI/Backdrop/Backdrop"
import Aux from "../../hoc/Auxiliary/Auxiliary"

const sideDrawer = props => {

	let attachedClasses = ["SideDrawer", "Close"];

	if (props.showSideDrawer) {
		attachedClasses = ["SideDrawer", "Open"];
	}

	return props.showSideDrawer ?
	(
		<Aux>
			<Backdrop show={props.showSideDrawer} clicked={props.closed}/>
			<div className={attachedClasses.join(' ')}>
				<div className={"LogoSideDrawer"}>
					<Logo/>
				</div>
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		</Aux>
	) : null;
}

export default sideDrawer;