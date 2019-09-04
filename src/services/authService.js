import * as types from '../constants/actionTypes/auth';


const authService = {

    isAuthenticated: false,

    addToken(token, tokenType, expiresAt) {
        console.log('set token', this);
        localStorage.setItem('token', token);
        authService.isAuthenticated = true;
    },
    removeToken() {
        localStorage.removeItem('token');
        authService.isAuthenticated = false;
    },
    tokenLogin(store) {
        if (localStorage.getItem('token')) {
            store.dispatch({ type: types.TOKEN_LOGIN, token: localStorage.getItem('token') });
            store.dispatch({ type: types.GET_ACCOUNT_REQUEST });
        }
    }
};

export default authService;