import { REGISTER_USER, LOGIN_USER } from './types'


//actions related to register user
export const registerUser = (formData, resetForm) => ({
    type: REGISTER_USER,
    formData,
    resetForm
})

// export const registerUserSuccess = data => ({
//     type: REGISTER_USER_SUCCESS,
//     data
// })

// export const registerUserFailure = error => ({
//     type: REGISTER_USER_FAILURE,
//     error
// })

export const loginUser = (formData, resetForm) => ({
    type: LOGIN_USER,
    formData,
    resetForm
})