import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Spring, config } from 'react-spring'

//action creators
import { hideModal } from '../../actions/modalActions'
import { userReset } from '../../actions/userActions'

//material-ui
import Divider from '@material-ui/core/Divider'

//imported components
import Modal from '../UI/HOC/Modal'
import ModalHeader from '../UI/utils/ModalHeader'
import LoginForm from './LoginForm'

//styled components
const Formater = styled.div`
    display: flex;
    align-items: center;
    margin: 3rem 0;
`

const Login = ({ hideModal, userReset}) => {

  const onClose = () => {
    hideModal()
    userReset()
  }

  return (
    <Spring
      config={config.default}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {
        props => (
          <div style={props}>
            <Modal onClose={onClose}>
              <ModalHeader
                onClose={onClose}
                title="Please sign in to the Guitar Shop" />
              <Formater>
                <LoginForm />
              </Formater>
              <Divider variant="middle" />
            </Modal>
          </div>)
      }
    </Spring>
  )
}

Login.propTypes = {
  hideModal: PropTypes.func.isRequired,
  userReset: PropTypes.func.isRequired
}


export default connect(null, { hideModal, userReset })(Login)