import { REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../actions/types'

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
                processing: false
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                processing: false
            }
        default:
            return state
    }
}