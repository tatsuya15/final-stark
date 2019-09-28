import * as types from '../constants/actionTypes/license';

/* GET LICENSES */
export const getLicensesList = () => ({
    type: types.GET_LICENSE_REQUEST
});

export const getLicensesListSuccess = licenses => ({
    type: types.GET_LICENSE_SUCCESS,
    licenses
});

export const getLicensesListError = error => ({
    type: types.GET_LICENSE_ERROR,
    error
});

/* UPDATE LICENSE */
export const updateLicense = (licenseData) => ({
    type: types.UPDATE_LICENSE_REQUEST,
    licenseData
});

export const updateLicenseSuccess = license => ({
    type: types.UPDATE_LICENSE_SUCCESS,
    license
});

export const updateLicenserror = error => ({
    type: types.UPDATE_LICENSE_ERROR,
    error
});

/* ADD LICENSE */
export const addLicense = (license) => ({
    type: types.ADD_LICENSE_REQUEST,
    license
});

export const addLicenseSuccess = license => ({
    type: types.ADD_LICENSE_SUCCESS,
    license
});

export const addLicenseError = error => ({
    type: types.ADD_LICENSE_ERROR,
    error
});