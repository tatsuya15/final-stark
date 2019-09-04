import * as types from '../constants/actionTypes/auth';

const loginRequest = (email, password, remember) => ({
    type: types.LOGIN_REQUEST,
    email,
    password,
    remember
});

const loginSuccess = (account, token) => ({
    type: types.LOGIN_SUCCESS,
    account,
    token
});

const loginFailure = err => ({
    type: types.LOGIN_FAILURE,
    err
});

export { loginRequest, loginSuccess, loginFailure };