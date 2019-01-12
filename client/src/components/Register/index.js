import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Spring, config } from 'react-spring'

//action creators
import { hideModal } from '../../actions/modalActions'

//material-ui
import Divider from '@material-ui/core/Divider'

//imported components
import Modal from '../UI/HOC/Modal'
import ModalHeader from '../UI/utils/ModalHeader'
import RegisterForm from './RegisterForm'

//styled components
const Formater = styled.div`
    display: flex;
    align-items: center;
    margin: 3rem 0;
`

const Register = props => {

  const onClose = () => {
    props.hideModal()
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
                title="Register with The Guitar Shop" />
              <Formater>
                <RegisterForm />
              </Formater>
              <Divider variant="middle" />
            </Modal>
          </div>)
      }
    </Spring>
  )
}

Register.propTypes = {
  hideModal: PropTypes.func.isRequired
}


export default connect(null, { hideModal })(Register)