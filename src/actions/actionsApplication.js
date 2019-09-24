import * as types from '../constants/actionTypes/application';

/* GET APPLICATIONS */
export const getListApplications = () => ({
    type: types.GET_APPLICATION_REQUEST
});

export const getListApplicationSuccess = applications => ({
    type: types.GET_APPLICATION_SUCCESS,
    applications
});

export const getListApplicationError = error => ({
    type: types.GET_APPLICATION_ERROR,
    error
});

/* UPDATE APPLICATION */
export const updateApplication = (projectData) => ({
    type: types.UPDATE_APPLICATION_REQUEST,
    projectData
});

export const updateApplicationSuccess = application => ({
    type: types.UPDATE_APPLICATION_SUCCESS,
    application
});

export const updateApplicationError = error => ({
    type: types.UPDATE_APPLICATION_ERROR,
    error
});