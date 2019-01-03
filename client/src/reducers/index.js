import { combineReducers } from 'redux'

//reducers
import user from './userReducer'
import modal from './modalReducer'

export default combineReducers({
    user,
    modal
}) 