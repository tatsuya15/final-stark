export const getListUsers = () => ({
    type: 'TEST_USERS_REQUEST'
});

export const getListUsersSuccess = users => ({
    type: 'TEST_USERS_SUCCESS',
    users
});

export const getListUsersError = error => ({
    type: 'TEST_USERS_FAIL',
    error
});

export const getUserById = idUser => ({
    type: 'TEST_USER_ID',
    idUser
});

export const getError = error => ({
    type: 'TEST_ERROR',
    error
});