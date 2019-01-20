//import from redux-saga
import { put, call } from 'redux-saga/effects'

//action types
import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    REGISTER_USER_VIA_LOGIN_MODAL_SUCCESS,
    REGISTER_USER_VIA_LOGIN_MODAL_FAILURE,
    HIDE_MODAL,
    SHOW_MODAL
} from '../actions/types'

import { REGISTER_MODAL } from '../components/ModalManager/modalTypes'

import axios from 'axios'


//USER REGISTER SAGA
export function* registerUserSaga(action) {
    try {
        //http request to register endpoint
        const response = yield axios.post('/api/users/register', action.formData)
        yield put({ type: REGISTER_USER_SUCCESS, payload: response.data })
        yield call(action.resetForm)
        yield put({ type: HIDE_MODAL })

    } catch (error) {
        yield put({ type: REGISTER_USER_FAILURE, payload: error.response.data.email })
    }
}

//USER LOGIN SAGA
export function* loginUserSaga(action) {
    try {
        //http request to register endpoint
        console.log('login', action.formData)
        const response = yield axios.post('/api/users/login', action.formData)
        yield put({ type: LOGIN_USER_SUCCESS, payload: response.data })
        yield call(action.resetForm)
        yield put({ type: HIDE_MODAL })

    } catch (error) {
        yield put({ type: LOGIN_USER_FAILURE, payload: error.response.data.email || error.response.data.password })
    }
}

//USER REGISTER USER VIA LOGIN MODAL
export function* registerUserViaLoginModalSaga(action) {
    try {
        //http request to register endpoint
        const response = yield axios.post('/api/users/register_via_login', action.formData)
        yield put({ type: REGISTER_USER_VIA_LOGIN_MODAL_SUCCESS, payload: response.data })
        yield put({ type: HIDE_MODAL })
        yield put({ type: SHOW_MODAL, modalType: REGISTER_MODAL, modalProps: { style: 'registerModal' } })

    } catch (error) {
        yield put({ type: REGISTER_USER_VIA_LOGIN_MODAL_FAILURE, payload: error.response.data.email })
    }
}