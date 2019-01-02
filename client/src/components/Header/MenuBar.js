import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//styled components
const MenuBarWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 6rem;
    background: ${({ theme }) => theme.secondaryColorDark};
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    height: 100%;
    margin: 0 auto;

    svg {
        font-size: 3rem;
        color: ${({ theme }) => theme.fontColorLight};
        }
    h3 {
        color: ${({ theme }) => theme.fontColorLight};
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

    h3 {
        font-size: 1.5rem;
        margin: 0 1rem;
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
                        <FontAwesomeIcon icon="bars" />
                        <h3>What are you looking for today?</h3>
                        <FontAwesomeIcon icon="comment-dots" className="dialog" />
                    </Categories>
                    <RegisterLogin>
                        <FontAwesomeIcon icon="user-circle" />
                        <h3>Sign In or Register</h3>
                    </RegisterLogin>
                    <Cart>
                        <FontAwesomeIcon icon="shopping-cart" />
                    </Cart>
                </Container>
            </MenuBarWrapper>
        )
    }
}

export default MenuBar