import * as types from '../constants/actionTypes/businessRule';

/* GET BUSINESS RULES */
export const getBRList = () => ({
    type: types.GET_BR_REQUEST
});

export const getBRListSuccess = br => ({
    type: types.GET_BR_SUCCESS,
    br
});

export const getBRListError = error => ({
    type: types.GET_BR_ERROR,
    error
});

/* UPDATE BUSINESS RULES */
export const updateBR = (brData) => ({
    type: types.UPDATE_BR_REQUEST,
    brData
});

export const updateBRSuccess = user => ({
    type: types.UPDATE_BR_SUCCESS,
    user
});

export const updateBRError = error => ({
    type: types.UPDATE_BR_ERROR,
    error
});

/* ADD BUSINESS RULE */
export const addBR = (brData) => ({
    type: types.ADD_BR_REQUEST,
    brData
});

export const addBRSuccess = br => ({
    type: types.ADD_BR_SUCCESS,
    br
});

export const addBRError = error => ({
    type: types.ADD_BR_ERROR,
    error
});