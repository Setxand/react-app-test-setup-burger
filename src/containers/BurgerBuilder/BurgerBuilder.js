import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary.js"
import Burger from "../../components/Burger/Burger.js"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"
import Modal from "../../components/UI/Modal/Modal.js"
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"

const INGREDIENT_PRICES = {
	salad: 0.4,
	bacon: 0.7,
	cheese: 0.5,
	meat: 1.4
}

const INITIAL_PRICE = 4;

class BurgerBuilder extends React.Component {

	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: INITIAL_PRICE,
		purchasable: false,
		purchasing: false
	}

	updatePurchaseState(updatedIngredients) {
				const sum = Object.keys(updatedIngredients).map(k => {
					return updatedIngredients[k];
		}).reduce((sum, el) => {
			return sum + el;
		}, 0)
		this.setState({purchasable: sum > 0})
	}

	editIngredientsHandler(editType, ingredientType) {
		let updatedCount = this.state.ingredients[ingredientType];
		const updatedIngredients = {...this.state.ingredients}
		const isMore = editType ==="More";

		updatedIngredients[ingredientType] = isMore ? updatedCount + 1 : updatedCount - 1;
		let price = this.state.totalPrice;

		if (price <= 0) return;
		price = isMore ? price + INGREDIENT_PRICES[ingredientType] : price - INGREDIENT_PRICES[ingredientType];
		this.setState({ingredients: updatedIngredients, totalPrice: price});
		this.updatePurchaseState(updatedIngredients)
	}

	purchaseHandler = () => {
		this.setState({purchasing: true});
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false})
	}

	purchaseContinueHandler = () => {
		alert("purchased");
		this.purchaseCancelHandler();
	}

	render() {
		const disableInfo = {...this.state.ingredients};
		for (let i in disableInfo) {
			disableInfo[i] = disableInfo[i] <= 0;
		}
		return (
			<Aux>
				<Modal show={this.state.purchasing}
					   modalClosed={this.purchaseCancelHandler}>
					<OrderSummary ingredients={this.state.ingredients}
								  cancel={this.purchaseCancelHandler}
								  continue={this.purchaseContinueHandler}
								  price={this.state.totalPrice}
								  show={this.state.purchasing}/>
				</Modal>
				<Burger ingredients={this.state.ingredients}/>
				<BuildControls editIngredients={(editType, ingredientType) =>
													this.editIngredientsHandler(editType, ingredientType)}
							   disabled={disableInfo}
							   price={this.state.totalPrice}
							   purchasable={this.state.purchasable}
							   ordered={this.purchaseHandler}/>
			</Aux>
		)
	}
}

export default BurgerBuilder;