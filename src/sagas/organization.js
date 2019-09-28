import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URI } from '../constants/config';
import * as types from '../constants/actionTypes/organization';
import axios from 'axios';


const getSquadsList = () => {
    return axios({
        method: 'get',
        url: API_URI + '/getSquads',
    });
};

const getTeamById = (id) => {
    return axios({
        method: 'get',
        url: API_URI + '/getTeamById',
        params: {
            id
        }
    });
};

export function* workerGetSquads(action) {
    try {
        const response = yield call(getSquadsList);
        const squads = response.data;

        yield put({ type: types.GET_SQUAD_SUCCESS, squads });

    } catch (error) {
        console.log("test error", error);
    }
}

export function* workerGetTeamById(action) {
    console.log("idteam = ", action.id);
    try {
        const response = yield call(getTeamById, action.id);
        const team = response.data;

        yield put({ type: types.GET_TEAM_SUCCESS, team });

    } catch (error) {
        console.log("test error", error);
    }
}

export function* watcherOrganization() {
    yield takeLatest(types.GET_SQUAD_REQUEST, workerGetSquads);
    yield takeLatest(types.GET_TEAM_REQUEST, workerGetTeamById);
}
