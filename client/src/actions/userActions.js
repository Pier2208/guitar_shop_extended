import { REGISTER_USER, 
         REGISTER_USER_VIA_LOGIN_MODAL,
         LOGIN_USER, 
         USER_RESET } from './types'


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

//this is an action creator for the case when the user is in the login modal but actually needs to be redirected to the register modal
export const registerUserViaLoginModal = formData => ({
    type: REGISTER_USER_VIA_LOGIN_MODAL,
    formData
})

export const userReset = () => ({
    type: USER_RESET
})