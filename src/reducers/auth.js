import * as types from '../constants/actionTypes/auth';

const initialState = {
    account: null,
    token: null,
    requests: {
        login: {
            fetching: false,
            error: null
        }
    }
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.LOGIN_SUCCESS:
            return { ...state, fetching: false, token: action.token, account: action.account };

        case types.LOGIN_FAILURE:
            return { ...state, fetching: false, token: null, account: null, error: action.error };

        default:
            return state;
    }
}

export default auth;