import React from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary.js"
import "./Layout.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../SideDrawer/SideDrawer"

class Layout extends React.Component {

	state = {
		showSideDrawer: true
	}

	sideDawerToggleHandler = () => {
		this.setState((prevState) => {
			return {showSideDrawer: !prevState.showSideDrawer}
		});
	}

	render() {
		return (
			<Aux>
				<Toolbar drawerToggleClicked={this.sideDawerToggleHandler}/>
				<SideDrawer closed={() => this.setState({showSideDrawer: false})}
							showSideDrawer={this.state.showSideDrawer}/>
				<main className={"Content"}>
					{this.props.children}
				</main>
			</Aux>
		)
	}
};

export default Layout;