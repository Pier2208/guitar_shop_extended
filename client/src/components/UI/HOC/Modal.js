import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//import styled components
import { Overlay, ModalBox } from '../styledComponents/Modal'

class Modal extends Component {

    componentDidMount() {
        if(this.props.onClose) {
            window.addEventListener('keydown', this.listenKeyboard, true)
        }
    }

    componentWiiUnmount() {
        if(this.props.onClose){
            window.removeEventListener('keydown', this.listenKeyboard, true)
        }
    }

    listenKeyboard = e => {
        if(e.key === 'Escape' || e.keyCode === 27) {
            this.props.onClose()
        }
    }

    onOverlayClick = () => {
        this.props.onClose()
    }

    onModalClick = e => {
        e.stopPropagation()
    }

    render() {
        return (
            <Overlay onClick={this.onOverlayClick}>
                <ModalBox
                    onClick={this.onModalClick}
                    type={this.props.style}
                    role='dialog'
                    aria-modal='true'
                >
                    {this.props.children}
                </ModalBox>
            </Overlay>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: Proptypes.node.isRequired
}

const mapStateToProps = state => ({
    style: state.modal.modalProps.style
})

export default connect(mapStateToProps)(Modal)
