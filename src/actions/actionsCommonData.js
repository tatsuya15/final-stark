import * as types from '../constants/actionTypes/commonData';

/* GET APPLICATIONS */
export const getCommonData = () => ({
    type: types.GET_COMMON_REQUEST
});

export const getCommonDataSuccess = commonData => ({
    type: types.GET_COMMON_SUCCESS,
    commonData
});

export const getCommonDataError = error => ({
    type: types.GET_COMMON_ERROR,
    error
});
