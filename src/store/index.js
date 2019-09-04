import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import createRootReducer from '../reducers';
import rootSaga from '../sagas';

export const history = createBrowserHistory();

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const routersMiddleware = routerMiddleware(history)
    const middlewares = [sagaMiddleware, routersMiddleware];

    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger);
    }

    const store = createStore(
        createRootReducer(history),
        compose(
            applyMiddleware(...middlewares),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
                window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;