import * as types from '../constants/actionTypes/application';

const initialState = {
    applications: null
}

const application = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_APPLICATION_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.GET_APPLICATION_SUCCESS:
            return { ...state, fetching: false, applications: action.applications };

        case types.GET_APPLICATION_ERROR:
            return { ...state, fetching: false, error: action.error };

        case types.UPDATE_APPLICATION_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.UPDATE_APPLICATION_SUCCESS:
            
            return {
                ...state, fetching: false,
                applications: state.applications.map(application => {
                    if (action.application.idproject === application.idproject) {
                        console.log('test DNA2 : ', action.application);
                        return action.application;
                    } else {
                        return application;
                    }
                })
            };

        case types.UPDATE_APPLICATION_ERROR:
            return { ...state, fetching: false, error: action.error };

        default:
            return state;
    }
}

export default application;