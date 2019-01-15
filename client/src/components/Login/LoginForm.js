import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { withRouter } from 'react-router-dom'

//import action creators
import { loginUser } from '../../actions/userActions'

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
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.fontColorLight} inset;
}
`
const styles = {
    input: {
        fontSize: '1.4rem', //while yping inside the form input
        fontFamily: 'Roboto'
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
    background: ${({ theme }) => theme.alert};
    position: relative;
    top: -3rem;
    left: 0;
    svg,
    h3 {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.fontColorLight};
        margin: 0 .5rem;
        font-weight: 300;
    }
`

class LoginForm extends Component {

    render() {
        const { classes } = this.props
        const { processing, errorMessage } = this.props.user

        return (
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={
                    Yup.object().shape({
                        email: Yup.string()
                            .email('Please enter a valid email')
                            .required('Email is required'),
                        password: Yup.string()
                            .min(8, 'Pasword must be at least 8 characters')
                            .required('Password is required')
                    })
                }
                onSubmit={(values, { resetForm }) => {
                    this.props.loginUser(values, resetForm)
                }}
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
                                errorMessage?
                                    <FormFailure>
                                        <FontAwesomeIcon icon="exclamation-triangle" />
                                        <h3>Please review the errors below...</h3>
                                    </FormFailure>
                                    :
                                    null
                            }

                            <div>
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
                                        },
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
                            </div>

                            <div>
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
                                        },
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
                                {touched.password && errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                                {errorMessage && <ErrorMessage>{errorMessage.includes('Password') && errorMessage}</ErrorMessage>}
                            </div>

                            <Wrapper style={{ display: 'flex', alignItems: 'center' }}>
                                <Button
                                    type="submit"
                                    full
                                >
                                    {processing ? <HalfCircleSpinner color='#fff' size={22} /> : 'LOGIN'}
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
    errorMessage: PropTypes.string
}

export default connect(mapStateToProps, { loginUser })(withRouter(withStyles(styles)(LoginForm)))
