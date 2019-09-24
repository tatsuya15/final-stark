import { all } from 'redux-saga/effects';
import * as test from './test';
import * as application from './application';
import * as user from './user';
import * as auth from './auth';
import * as commonData from './commonData';

export default function* rootSaga() {
    yield all([
        test.watcherTest(),
        application.watcherApplication(),
        user.watcherUser(),
        auth.watcherAuthentication(),
        commonData.watcherCommonData()
    ]);
};