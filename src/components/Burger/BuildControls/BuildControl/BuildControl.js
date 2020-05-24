import React from "react";

import "./BuildControl.css"

const buildControl = props => (
	<div className={"BuildControl"}>
		<div className={"Label"}>{props.label}</div>
		<button className={"Less"}
				onClick={() => props.editIngredients("Less")}
				disabled={props.disabled}>less</button>
		<button className={"More"} onClick={() => props.editIngredients("More")}>more</button>
	</div>
);

export default buildControl;