import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//import specific modal components
import RegisterModal from '../Register'
import LoginModal from '../Login'

const MODAL_COMPONENTS = {
    REGISTER_MODAL: RegisterModal,
    LOGIN_MODAL: LoginModal
}

const ModalManager = ({ modalType, modalProps }) => {
    if(!modalType) {
        return null
    }
    
    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps}  />

}

const mapStateToProps = state => ({
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps
})

ModalManager.propTypes = {
    modalType: PropTypes.string,
    modalProps: PropTypes.object
}

export default connect(mapStateToProps)(ModalManager)