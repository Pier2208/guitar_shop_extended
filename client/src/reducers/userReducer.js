import { REGISTER_USER, 
         REGISTER_USER_SUCCESS, 
         REGISTER_USER_FAILURE,
         LOGIN_USER,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAILURE,
         LOGIN_USER_FAILURE_INTERNAL } from '../actions/types'

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
                processing: false
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
                internalError: '',
                processing: false
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                loginSuccess: false,
                processing: false
            }
        case LOGIN_USER_FAILURE_INTERNAL:
            return {
                ...state,
                loginSuccess: false,
                processing: false,
                internalError: action.payload
            }
        default:
            return state
    }
}