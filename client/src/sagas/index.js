//import from redux-saga
import { takeLatest, all } from 'redux-saga/effects'

//action types
import { REGISTER_USER, REGISTER_USER_VIA_LOGIN_MODAL, LOGIN_USER} from '../actions/types'

//sagas
import { registerUserSaga, loginUserSaga, registerUserViaLoginModalSaga } from './userSaga'

export default function* rootSaga() {
    //WATCH FOR ACTIONS CALLED REGISTER_USER and call registerUserSaga passing the action as argument
    yield all([
        takeLatest(REGISTER_USER, registerUserSaga),
        takeLatest(LOGIN_USER, loginUserSaga),
        takeLatest(REGISTER_USER_VIA_LOGIN_MODAL, registerUserViaLoginModalSaga)
    ])
}