import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URI } from '../constants/config';
import * as types from '../constants/actionTypes/user';
import axios from 'axios';


const getUsersList = () => {
    return axios({
        method: 'get',
        url: API_URI + '/getUsers',
    });
};

const updateUser = (userData) => {
    return axios({
        method: 'put',
        url: `${API_URI}/updateUser`,
        params: userData
    });
};

const addUser = (userData) => {
    return axios({
        method: 'post',
        url: `${API_URI}/addUser`,
        params: userData
    });
};

export function* workerGetUsers(action) {
    try {
        const response = yield call(getUsersList);
        const users = response.data;

        yield put({ type: types.GET_USER_SUCCESS, users });

    } catch (error) {
        console.log("test error", error);
    }
}

export function* workerUpdateUser(action) {
    try {
        const response = yield call(updateUser, action.userData);
        const updatedUser = response.data[0];

        yield put({ type: types.UPDATE_USER_SUCCESS, error: null, user: updatedUser  });

    } catch (error) {
        console.log("test error", error);
    }
}

export function* workerAddUser(action) {
    try {
        console.log('userData action:', action);
        const response = yield call(addUser, action.userData);
        const addedUser = response.data;

        yield put({ type: types.ADD_USER_SUCCESS, error: null, user: addedUser  });

    } catch (error) {
        console.log("test error", error);
    }
}


export function* watcherUser() {
    yield takeLatest(types.GET_USER_REQUEST, workerGetUsers);
    yield takeLatest(types.UPDATE_USER_REQUEST, workerUpdateUser);
    yield takeLatest(types.ADD_USER_REQUEST, workerAddUser);
}
