import axios from 'axios';

export const getUserById = (idUser) => {
    console.log('axios idUser : ', idUser);
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users/' + idUser
    });
};

export const getListUsers = () => {
    console.log('axios userslist');
    return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    });
};
