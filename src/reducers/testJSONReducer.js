const initialState = {
    users: [],
    currentUser: null,
    error: null
}

const  testJSON = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST_USER_ID':
            return state;
        case 'TEST_USERS_REQUEST':
            return state;
        case 'TEST_USERS_SUCCESS':
            return {...state, users: action.users};
        case 'TEST_USER_SUCCESS':
            return {...state, currentUser: action.currentUser};
        case 'TEST_ERROR':
            return state;
        default:
            return state
    }
}

export default testJSON;