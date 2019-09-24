import { combineReducers } from 'redux';
import testJSON from './testJSONReducer';
import dataApplication from './application';
import dataUser from './user';
import auth from './auth';
import commonData from './commonData';
import { connectRouter } from 'connected-react-router';

export default (history) => combineReducers({
    router: connectRouter(history),
    testJSON,
    dataApplication,
    dataUser,
    auth,
    commonData
});