import React from "react";
import PropTypes from "prop-types";
import BurgIngredient from "./BurgerIngridiant/BurgerIngredient.js"
import "./Burger.css"

const burger = props => {

	let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
		return [...Array(props.ingredients[igKey])]
			.map((el, index) => <BurgIngredient key={igKey + index} type={igKey}/>)

	}).reduce((arr, el) => {
		return arr.concat(el)
	}, []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please, start to add the ingredients!</p>
	}
	return (
		<div className={"Burger"}>
			<BurgIngredient type={"bread-top"}/>
			{transformedIngredients}
			<BurgIngredient type={"bread-bottom"}/>

		</div>
	)
};

burger.prototype = {
	type: PropTypes.string.isRequired
}


export default burger;

