import React, { Component } from 'react'
import styled from 'styled-components'

//imported components
import SearchBar from './SearchBar'

const Container = styled.div`
     display: flex;
     flex-flow: column;
     width: 100%;
 `

const LogoBar = styled.div`
     display: flex;
     width: 100%;
     height: 10rem;
     background: ${({theme}) => theme.fontColorLight};
 `

const MenuBar = styled.div`
    display: flex;
    width: 100%;
    height: 6rem;
    background: ${({theme}) => theme.secondaryColorLight};
`


class Header extends Component {
    render() {
        return (
            <Container>
                <SearchBar />
                <LogoBar />
                <MenuBar />
            </Container>
        )
    }
}

export default Header
