import * as types from '../constants/actionTypes/organization';

/* GET SQUADS */
export const getSquadsList = () => ({
    type: types.GET_SQUAD_REQUEST
});

export const getSquadsListSuccess = squads => ({
    type: types.GET_SQUAD_SUCCESS,
    squads
});

export const getUsersListError = error => ({
    type: types.GET_SQUAD_ERROR,
    error
});

/* GET TEAM */
export const getTeamById = (id) => ({
    type: types.GET_TEAM_REQUEST,
    id
});

export const getTeamByIdSuccess = team => ({
    type: types.GET_TEAM_SUCCESS,
    team
});

export const getTeamByIdError = error => ({
    type: types.GET_SQUAD_ERROR,
    error
});