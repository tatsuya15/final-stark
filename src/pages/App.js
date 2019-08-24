import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Error404 from './404';
import PrivateRoute from '../components/routes/PrivateRoute';

class App extends Component {

	render() {
		return (
			<Router>
				<div className="App">


				</div>

				<Switch>
					<Route exact path="/" component={Login} />
					<PrivateRoute path="/home" component={Home} />

					<Route component={Error404} />
				</Switch>



			</Router>

		);
	}

}

export default App;
