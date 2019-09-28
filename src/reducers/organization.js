import * as types from '../constants/actionTypes/organization';

const initialState = {
    squads: null,
    team: null
}

const organization = (state = initialState, action) => {
    switch (action.type) {
        // SQUAD
        case types.GET_SQUAD_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.GET_SQUAD_SUCCESS:
            return { ...state, fetching: false, squads: action.squads };

        case types.GET_SQUAD_ERROR:
            return { ...state, fetching: false, error: action.error };

        // TEAM
        case types.GET_TEAM_REQUEST:
            return { ...state, fetching: true, error: null };

        case types.GET_TEAM_SUCCESS:
            return { ...state, fetching: false, team: action.team };

        case types.GET_TEAM_ERROR:
            return { ...state, fetching: false, error: action.error };

        default:
            return state;
    }
}

export default organization;