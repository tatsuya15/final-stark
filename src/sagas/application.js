import { call, put, takeLatest } from 'redux-saga/effects';
import { API_URI } from '../constants/config';
import * as types from '../constants/actionTypes/application';
import axios from 'axios';


const getListApplications = () => {
    return axios({
        method: 'get',
        url: API_URI + '/getProjectsWaycom',
    });
};

const updateApplication = (projectData) => {

    return axios({
        method: 'put',
        url: `${API_URI}/updateProject`,
        params: projectData
    });
};

export function* workerGetApplications(action) {
    try {
        const response = yield call(getListApplications);
        const applications = response.data;

        yield put({ type: types.GET_APPLICATION_SUCCESS, applications });

    } catch (error) {
        console.log("test error", error);
    }
}

export function* workerUpdateApplication(action) {
    try {
        const response = yield call(updateApplication, action.projectData);
        const updatedProject = response.data[0];

        console.log("updated project :", updatedProject);

        yield put({ type: types.UPDATE_APPLICATION_SUCCESS, error: null, application: updatedProject  });

    } catch (error) {
        console.log("test error", error);
    }
}


export function* watcherApplication() {
    yield takeLatest(types.GET_APPLICATION_REQUEST, workerGetApplications);
    yield takeLatest(types.UPDATE_APPLICATION_REQUEST, workerUpdateApplication);
}
