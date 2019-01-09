import { REGISTER_USER } from './types'


//actions related to register user
export const registerUser = (formData) => ({
    type: REGISTER_USER,
    formData
})

// export const registerUserSuccess = data => ({
//     type: REGISTER_USER_SUCCESS,
//     data
// })

// export const registerUserFailure = error => ({
//     type: REGISTER_USER_FAILURE,
//     error
// })