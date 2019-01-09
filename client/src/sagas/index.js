//import from redux-saga
import { takeLatest } from 'redux-saga/effects'

//action types
import { REGISTER_USER } from '../actions/types'

//sagas
import { registerUserSaga } from './userSaga'

export default function* rootSaga() {
    //WATCH FOR ACTIONS CALLED REGISTER_USER and call registerUserSaga passing the action as argument
    yield takeLatest(REGISTER_USER, registerUserSaga)
}