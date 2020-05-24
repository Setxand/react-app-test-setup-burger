import React from 'react';
import Aux from "./hoc/Auxiliary/Auxiliary.js"
import Layout from "./components/Layout/Layout.js"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder.js"
const App = props => (
	<Aux>
		<Layout>
			<BurgerBuilder/>
		</Layout>
	</Aux>
);

export default App;
