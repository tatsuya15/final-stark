import axios from 'axios';

export const getUserById = (idUser) => {
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/' + idUser
    });
};

export const getListUsers = () => {
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    });
};
