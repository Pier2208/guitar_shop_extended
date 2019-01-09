import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

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
    <Modal onClose={onClose}>
      <ModalHeader
        onClose={onClose}
        title="Register with The Guitar Shop" />
      <Formater>
        <RegisterForm />
      </Formater>
      <Divider variant="middle" />
    </Modal>
  )
}

Register.propTypes = {
  hideModal: PropTypes.func.isRequired
}


export default connect(null, { hideModal })(Register)