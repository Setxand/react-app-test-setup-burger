import React from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary"
import Button from "../../UI/Button/Button"

class OrderSummary extends React.Component {



	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return nextProps.show;
	}


	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map(key => {
			return <li key={key}><span style={{textTransform: 'capitalise'}}>{key}</span>:
				{this.props.ingredients[key]}</li>
		});

		return (
			<Aux>
				<h3>Your order</h3>
				<p>Delicious burger with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
				<p>Continue to checkout?</p>

				<Button clicked={this.props.cancel}
						btnType={"Danger"}>
					CANCEL
				</Button>
				<Button btnType={"Success"}
						clicked={this.props.continue}>CONTINUE</Button>
			</Aux>
		)
	}

};

export default OrderSummary;