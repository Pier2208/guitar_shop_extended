import React, { Component } from 'react'
import styled from 'styled-components'

//imported components
import SearchBar from './SearchBar'
import LogoBar from './LogoBar'
import MenuBar from './MenuBar'

const Container = styled.div`
     display: flex;
     flex-flow: column;
     width: 100%;
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
