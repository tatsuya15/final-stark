import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Error404 from './404';
import PrivateRoute from '../components/routes/PrivateRoute';
import 'materialize-css/dist/css/materialize.min.css';
import '../assets/scss/index.scss';

class App extends Component {

	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						<Route exact path="/" component={Login} />
						<PrivateRoute path="/home" component={Home} />

						<Route component={Error404} />
					</Switch>

				</div>
			</Router>

		);
	}

}

export default App;
