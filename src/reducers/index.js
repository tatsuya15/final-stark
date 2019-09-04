import { combineReducers } from 'redux';
import testJSON from './testJSONReducer';
import auth from './auth';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    testJSON,
    auth
});