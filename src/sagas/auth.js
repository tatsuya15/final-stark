import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { API_URI } from '../constants/config';
import authService from '../services/authService';
import * as types from '../constants/actionTypes/auth';
import { loginSuccess } from '../actions/actionsAuth';
import axios from 'axios';


const login = (email, password, rememberme) => {

    return axios({
        method: 'post',
        url: API_URI + '/login',
        params: {
            email,
            password,
            rememberme
        }
    });
};

export function* workerLogin(payload) {

    try {

        const response = yield call(login, payload.email, payload.password, payload.remember);
        const token = response.data.token;
        const account = response.data.account;

        yield call(authService.addToken, token.access_token);

        //yield put({ type: types.LOGIN_SUCCESS, token, account });
        yield put(loginSuccess(account, token));

        //yield put({ type: formFieldsTypes.LOAD_FORM_FIELDS_REQUEST });
        yield put(push('/home'));


    } catch (error) {
        yield put({ type: types.LOGIN_FAILURE, error });
    }
}


export function* watcherAuthentication() {
    yield takeLatest(types.LOGIN_REQUEST, workerLogin);
}
