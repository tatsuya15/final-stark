import * as types from '../constants/actionTypes/user';

/* GET USERS */
export const getUsersList = () => ({
    type: types.GET_USER_REQUEST
});

export const getUsersListSuccess = users => ({
    type: types.GET_USER_SUCCESS,
    users
});

export const getUsersListError = error => ({
    type: types.GET_USER_ERROR,
    error
});

/* UPDATE USER */
export const updateUser = (userData) => ({
    type: types.UPDATE_USER_REQUEST,
    userData
});

export const updateUserSuccess = user => ({
    type: types.UPDATE_USER_SUCCESS,
    user
});

export const updateUserError = error => ({
    type: types.UPDATE_USER_ERROR,
    error
});

/* ADD USER */
export const addUser = (userData) => ({
    type: types.ADD_USER_REQUEST,
    userData
});

export const addUserSuccess = user => ({
    type: types.ADD_USER_SUCCESS,
    user
});

export const addUserError = error => ({
    type: types.ADD_USER_ERROR,
    error
});