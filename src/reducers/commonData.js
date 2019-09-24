import * as types from '../constants/actionTypes/commonData';

const initialState = {
    commonData: null
}

const commonData = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_COMMON_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.GET_COMMON_SUCCESS:
            return { ...state, fetching: false, commonData: action.commonData };

        case types.GET_COMMON_ERROR:
            return { ...state, fetching: false, error: action.error };

        default:
            return state;
    }
}

export default commonData;