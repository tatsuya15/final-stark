import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import Login from './Login';
import Home from './Home';
import Applications from './Applications';
import Error404 from './404';
import PrivateRoute from '../components/routes/PrivateRoute';
import '../assets/scss/index.scss';

import { Provider } from 'react-redux';
import  configureStore, { history } from '../store';

const store = configureStore();


console.log(`${process.env.name} ${process.env.REACT_APP_VERSION}`)

class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<div className="App router-container">
						<Switch>
							<Route exact path="/" component={Login} />
							<PrivateRoute path="/home" component={Home} />
							<PrivateRoute path="/applications" component={Applications} />
							<Route component={Error404} />
						</Switch>

					</div>
				</ConnectedRouter>
			</Provider>
		);
	}

}

export default App;
