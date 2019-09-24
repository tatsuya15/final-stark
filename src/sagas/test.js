import { call, put, takeLatest } from 'redux-saga/effects'
import { getListUsers, getUserById } from './api/apiTest';


export function* workerGetListUsers(action) {
    try {
        const response = yield call(getListUsers);
        const users = response.data;

        yield put({ type: 'TEST_USERS_SUCCESS', users });

    } catch (error) {
        console.log("test error", error);        
    }
}

export function* workerGetUserById(action) {
    try {
        const response = yield call(getUserById, action.idUser);
        const currentUser = response.data;

        yield put({ type: 'TEST_USER_SUCCESS', currentUser });
        
    } catch (error) {
        console.log("test error", error);        
    }
}

export function* watcherTest() {
    yield takeLatest('TEST_USERS_REQUEST', workerGetListUsers);
    yield takeLatest('TEST_USER_ID', workerGetUserById);
}
