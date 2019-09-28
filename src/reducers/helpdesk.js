import * as types from '../constants/actionTypes/license';

const initialState = {
    licenses: null
}

const helpdesk = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LICENSE_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.GET_LICENSE_SUCCESS:
            return { ...state, fetching: false, license: action.license };

        case types.GET_LICENSE_ERROR:
            return { ...state, fetching: false, error: action.error };

        case types.UPDATE_LICENSE_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.UPDATE_LICENSE_SUCCESS:
            
            return {
                ...state, fetching: false,
                // licenses: state.licenses.map(LICENSE => {
                //     if (action.LICENSE.idproject === LICENSE.idproject) {
                //         console.log('test DNA2 : ', action.LICENSE);
                //         return action.LICENSE;
                //     } else {
                //         return LICENSE;
                //     }
                // })
            };

        case types.UPDATE_LICENSE_ERROR:
            return { ...state, fetching: false, error: action.error };

        default:
            return state;
    }
}

export default helpdesk;