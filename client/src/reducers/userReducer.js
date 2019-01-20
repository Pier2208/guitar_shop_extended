import { REGISTER_USER, 
         REGISTER_USER_SUCCESS, 
         REGISTER_USER_FAILURE,
         LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAILURE,
         USER_RESET, 
         REGISTER_USER_VIA_LOGIN_MODAL,
         REGISTER_USER_VIA_LOGIN_MODAL_SUCCESS,
         REGISTER_USER_VIA_LOGIN_MODAL_FAILURE } from '../actions/types'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                processing: true
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                registerSuccess: action.payload,
                errorMessage: '',
                processing: false,
                loginSuccess: '',
                data: null
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                registerSucess: false,
                processing: false
            }
        case LOGIN_USER:
            return {
                ...state,
                processing: true
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loginSuccess: action.payload,
                errorMessage: '',
                processing: false
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                loginSuccess: false,
                processing: false
            }
        case REGISTER_USER_VIA_LOGIN_MODAL:
            return {
                ...state,
                processing: true
            }
        case REGISTER_USER_VIA_LOGIN_MODAL_SUCCESS:
            return {
                ...state,
                processing: false,
                data: action.payload,
                errorMessage: ''
            }
        case REGISTER_USER_VIA_LOGIN_MODAL_FAILURE:
            return {
                ...state,
                processing: false,
                errorMessage: action.payload
            }
        case USER_RESET:
            return {
                ...state,
                data: '',
                loginSuccess: false,
                processing: false,
                errorMessage: ''
            }
        default:
            return state
    }
}