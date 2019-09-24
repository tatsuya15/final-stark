import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { API_URI } from '../constants/config';
import * as types from '../constants/actionTypes/commonData';
import { getCommonDataSuccess } from '../actions/actionsCommonData';
import axios from 'axios';


const getCommonData = () => {
    return axios({
        method: 'get',
        url: API_URI + '/getCommonData'
    });
};

export function* workerCommonData(action) {

    try {
        const response = yield call(getCommonData);

        console.log('common data :', response);

        yield put(getCommonDataSuccess(response.data));

    } catch (error) {
        console.log('ERROR LOGIN FAILURE : ', error);
        yield put({ type: types.GET_COMMON_ERROR, error });
    }
}


export function* watcherCommonData() {
    yield takeLatest(types.GET_COMMON_REQUEST, workerCommonData);
}
