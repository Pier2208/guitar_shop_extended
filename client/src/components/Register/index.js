import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Modal from '../UI/HOC/Modal'

import { HIDE_MODAL } from '../../actions/types'

const Register = props => {

  const onClose = () => {
    props.dispatch({ type: HIDE_MODAL})
  }
  return (
    <Modal onClose={onClose}>
    </Modal>
  )
}

Register.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(Register)