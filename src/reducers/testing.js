import * as types from '../constants/actionTypes/businessRule';

const initialState = {
    businessRules: null
}

const testing = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BR_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.GET_BR_SUCCESS:
            return { ...state, fetching: false, users: action.br };

        case types.GET_BR_ERROR:
            return { ...state, fetching: false, error: action.error };

        case types.UPDATE_BR_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.UPDATE_BR_SUCCESS:

            return {
                ...state, fetching: false,
                // users: state.businessRules.map(businessRule => {
                //     if (action.businessRule.iduser_ex === user.iduser_ex) {
                //         return action.user;
                //     } else {
                //         return user;
                //     }
                // })
            };

        case types.UPDATE_BR_ERROR:
            return { ...state, fetching: false, error: action.error };

        case types.ADD_BR_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.ADD_BR_SUCCESS:
            return { ...state, fetching: false,
                 businessRules: [action.businessRule, ...state.businessRules]  
            };

        case types.ADD_BR_ERROR:
            return { ...state, fetching: false, error: action.error };

        default:
            return state;
    }
}

export default testing;