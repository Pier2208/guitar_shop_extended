//import from redux-saga
import { put } from 'redux-saga/effects'

//action types
import { REGISTER_USER_SUCCESS, 
         REGISTER_USER_FAILURE,
         HIDE_MODAL } from '../actions/types'

import axios from 'axios'


//USER REGISTER SAGA
export function* registerUserSaga(action) {
    try {
        //http request to register endpoint
        var response = yield axios.post('/api/users/register', action.formData)
        yield put({ type: REGISTER_USER_SUCCESS, payload: response.data})
        yield put({ type: HIDE_MODAL })

    } catch (error) {
        console.log(error.response.error)
        yield put({ type: REGISTER_USER_FAILURE, payload: 'Internal Error (500) - Refresh and resubmit'})
    }
}