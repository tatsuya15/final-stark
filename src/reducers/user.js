import * as types from '../constants/actionTypes/user';

const initialState = {
    users: null
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USER_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.GET_USER_SUCCESS:
            return { ...state, fetching: false, users: action.users };

        case types.GET_USER_ERROR:
            return { ...state, fetching: false, error: action.error };

        case types.UPDATE_USER_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.UPDATE_USER_SUCCESS:

            return {
                ...state, fetching: false,
                users: state.users.map(user => {
                    if (action.user.iduser_ex === user.iduser_ex) {
                        return action.user;
                    } else {
                        return user;
                    }
                })
            };

        case types.UPDATE_USER_ERROR:
            return { ...state, fetching: false, error: action.error };

        case types.ADD_USER_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.ADD_USER_SUCCESS:
            console.log('debug', [action.user, ...state.users]);
            return { ...state, fetching: false,
                 users: [action.user, ...state.users]  
            };

        case types.ADD_USER_ERROR:
            return { ...state, fetching: false, error: action.error };

        default:
            return state;
    }
}

export default user;