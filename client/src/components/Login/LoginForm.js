import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { withRouter } from 'react-router-dom'

//import action creators
import { loginUser, registerUserViaLoginModal } from '../../actions/userActions'
import { hideModal } from '../../actions/modalActions'

//Formik and validation library
import { Formik } from 'formik'
import * as Yup from 'yup'

//Material-ui / FontAwesome
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { HalfCircleSpinner } from 'react-epic-spinners'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//imported styled components
import { Button } from '../../styles/styledComponents'
import LoginOptions from './LoginOptions'


//styled components
const Form = styled.form`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100%;
`

const Wrapper = styled.div`
    width: 35rem;
    margin-top: 2rem;
`

const Input = styled(TextField)`
    width: 35rem;
    height: 4.5rem;
    border-radius: 1rem;

   input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.fontLight} inset;
}
`
const Label = styled.label`
    width: 35rem;
    height: 1.5rem;
    font-size: 1.5rem;
    font-weight: 700;

    &.loginOption {
        margin: 2rem 0 0.5rem 0;
    }
`

const styles = {
    input: {
        fontSize: '1.4rem', //while yping inside the form input
        fontFamily: 'Roboto',
    },
    formControl: {
        fontSize: '1.3rem',
        color: '#0D1317',
        fontFamily: 'Roboto'//of the placeholder text
    },
    cssLabel: {
        '&$cssFocused:not($error)': {
            color: 'black',
            fontWeight: '400',
            fontSize: '1.3rem',
            fontFamily: 'Roboto'//of the label text
        }
    },
    cssFocused: {},
    cssOutlinedInput: {
        '&$cssFocused:not($error) $notchedOutline:not($error)': {
            border: '1px solid #3A2D32'
        }
    },
    notchedOutline: {},
    error: {},
    label: {
        fontSize: '1.3rem',
        color: '#0D1317'
    }
}


const ErrorMessage = styled.div`
  width: 35rem;
  margin: 0;
  font-size: 1rem;
  color: red;
`

const FormFailure = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 3.5rem;
    width: 100%;
    height: 4rem;
    background: ${({ theme }) => theme.color.alert};
    position: relative;
    top: -3rem;
    left: 0;
    svg,
    h3 {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.color.fontLight};
        margin: 0 .5rem;
        font-weight: 300;
    }
`

class LoginForm extends Component {

    state = {
        hasPassword: 'true'
    }

    handleChange = e => {
        this.setState({ hasPassword: e.target.value })
    }

    render() {
        const { hasPassword } = this.state
        const { classes, loginUser, hideModal, registerUserViaLoginModal } = this.props
        const { processing, errorMessage } = this.props.user

        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}

                validationSchema={
                    hasPassword === 'true' ?
                        Yup.object().shape({
                            email: Yup.string()
                                .email('Please enter a valid email')
                                .required('Email is required'),
                            password: Yup.string()
                                .min(8, 'Pasword must be at least 8 characters')
                                .required('Password is required')
                        })
                        :
                        Yup.object().shape({
                            email: Yup.string()
                                .email('Please enter a valid email')
                                .required('Email is required')
                        })
                }

                onSubmit={
                    //if radio btn 'Ihave  a password' is clicked, associate this function to the CONTINUE BTN
                    hasPassword === 'true' ?
                        (values, { resetForm }) => {
                            loginUser(values, resetForm)
                        }
                        :
                        //otherwise, CONTINUE BTN will will trigger this function
                        values => registerUserViaLoginModal(values)
                }
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    handleBlur
                }) => (
                        <Form onSubmit={handleSubmit} noValidate>
                            {
                                errorMessage ?
                                    <FormFailure>
                                        <FontAwesomeIcon icon="exclamation-triangle" />
                                        <h3>Please review the errors below...</h3>
                                    </FormFailure>
                                    :
                                    null
                            }
                            <Label>1. What is your email address?</Label>
                            <Input
                                type='email'
                                autoComplete='off'
                                label="Email"
                                name='email'
                                variant='outlined'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={(touched.email && errors.email) || errorMessage ? true : false}
                                margin='normal'
                                InputLabelProps={{
                                    classes: {
                                        root: classes.cssLabel,
                                        focused: classes.cssFocused,
                                        formControl: classes.formControl,
                                        error: classes.error
                                    }
                                }}
                                InputProps={{
                                    classes: {
                                        input: classes.input,
                                        error: classes.error,
                                        root: classes.cssOutlinedInput,
                                        focused: classes.cssFocused,
                                        notchedOutline: classes.notchedOutline
                                    },
                                }}
                            />
                            {touched.email && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                            {errorMessage && <ErrorMessage>{errorMessage.includes('User') && errorMessage}</ErrorMessage>}

                            <Label className='loginOption'>2. Do you have a password?</Label>
                            <LoginOptions
                                hasPassword={this.state.hasPassword}
                                handleChange={this.handleChange}
                            />

                            {
                                hasPassword === 'false' ?
                                    null
                                    :
                                    <>
                                        <Input
                                            type='password'
                                            autoComplete='off'
                                            label="Password"
                                            name='password'
                                            variant='outlined'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={(touched.password && errors.password) || errorMessage ? true : false}
                                            margin='normal'
                                            InputLabelProps={{
                                                classes: {
                                                    root: classes.cssLabel,
                                                    focused: classes.cssFocused,
                                                    formControl: classes.formControl,
                                                    error: classes.error
                                                }
                                            }}
                                            InputProps={{
                                                classes: {
                                                    input: classes.input,
                                                    error: classes.error,
                                                    root: classes.cssOutlinedInput,
                                                    focused: classes.cssFocused,
                                                    notchedOutline: classes.notchedOutline
                                                }
                                            }}
                                        />
                                        {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                                        {errorMessage && <ErrorMessage>{errorMessage.includes('Password') && errorMessage}</ErrorMessage>}
                                    </>

                            }


                            <Wrapper style={{ display: 'flex', alignItems: 'center' }}>
                                <Button
                                    type="button"
                                    onClick={() => hideModal()}
                                    outlined
                                >
                                    CANCEL
                                </Button>

                                <Button type="submit" full style={{ marginLeft: '1.5rem' }}>
                                    {processing ? <HalfCircleSpinner color='#fff' size={22} /> : 'CONTINUE'}
                                </Button>
                            </Wrapper>
                        </Form>
                    )}
            </Formik>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
})

LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    processing: PropTypes.bool,
    errorMessage: PropTypes.string,
    hideModal: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { loginUser, registerUserViaLoginModal, hideModal })(withRouter(withStyles(styles)(LoginForm)))
