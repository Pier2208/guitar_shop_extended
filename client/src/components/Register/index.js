import React from 'react'
import { connect } from 'react-redux'

import Modal from '../UI/HOC/Modal'

import { HIDE_MODAL } from '../../actions/types'

const Register = props => {

  const onClose = () => {
    props.dispatch({ type: HIDE_MODAL})
  }
  return (
    <Modal onClose={onClose}>
      hello modal register
    </Modal>
  )
}

export default connect()(Register)