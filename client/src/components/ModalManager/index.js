import React from 'react'
import { connect } from 'react-redux'

//import specific modal components
import RegisterModal from '../Register'

const MODAL_COMPONENTS = {
    REGISTER_MODAL: RegisterModal
}

const ModalManager = ({ modalType, modalProps }) => {
    if(!modalType) {
        return null
    }
    
    const SpecificModal = MODAL_COMPONENTS[modalType]
    return <SpecificModal {...modalProps} />

}

const mapStateToProps = state => ({
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps
})

export default connect(mapStateToProps)(ModalManager)