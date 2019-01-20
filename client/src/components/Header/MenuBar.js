import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import modalTypes
import { REGISTER_MODAL, LOGIN_MODAL } from '../ModalManager/modalTypes'

//import styled components
import { LogButton } from '../../styles/styledComponents'
import HamburgerMenu from '../UI/utils/HamburgerMenu'

//import action creators
import { showModal } from '../../actions/modalActions'

//styled components
const MenuBarWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 6rem;
    background: ${({ theme }) => theme.color.secondaryDark};
    
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    height: 100%;
    margin: 0 auto;
    color: ${({ theme }) => theme.color.fontLight};

    svg {
        font-size: 3.2rem;
        }
    h3, span {
        font-weight: 300;
    }
`

const Categories = styled.div`
    display: flex;
    align-items: center;
    flex-basis: 40%;
    margin-right: auto;

    svg.dialog {
        transform: translateY(-.8rem)
    }

    h3 {
        font-size: 2rem;
        margin: 0 1rem 0 1.5rem;
    }
`
const RegisterLogin = styled.div`
    display: flex;
    align-items: center;
    span {
        font-size: 1.5rem;
    }
`

const Cart = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 5%;
`

class MenuBar extends Component {
    render() {
        return (
            <MenuBarWrapper>
                <Container>
                    <Categories>
                        <HamburgerMenu 
                            toggleMenu={this.props.toggleMenu}
                            isMenuOpen={this.props.isMenuOpen} />
                        <h3>What are you looking for today?</h3>
                        <FontAwesomeIcon icon="comment-dots" className="dialog" />
                    </Categories>
                    <RegisterLogin>
                        <FontAwesomeIcon icon="user-circle" aria-hidden />
                        <LogButton onClick={() => this.props.showModal(LOGIN_MODAL, { style: 'loginModal' })}>Sign In</LogButton>
                        <span>or</span>
                        <LogButton onClick={() => this.props.showModal(REGISTER_MODAL, { style: 'registerModal' })}>Register</LogButton>
                    </RegisterLogin>
                    <Cart>
                        <FontAwesomeIcon icon="shopping-cart" />
                    </Cart>
                </Container>
            </MenuBarWrapper>
        )
    }
}

MenuBar.propTypes = {
    modal: PropTypes.object.isRequired,
    showModal: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    modal: state.modal
})

export default connect(mapStateToProps, { showModal })(MenuBar)