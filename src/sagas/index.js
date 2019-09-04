import { all } from 'redux-saga/effects';
import * as test from './test';
import * as auth from './auth';


export default function* rootSaga() {
    yield all([
        test.watcherTest(),
        
        auth.watcherAuthentication(),
    ]);
};