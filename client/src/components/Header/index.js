import React, { Component } from 'react'
import styled from 'styled-components'

//imported components
import SearchBar from './SearchBar'
import LogoBar from './LogoBar'
import MenuBar from './MenuBar'
import MainMenu from './MainMenu'

//styled components
const Container = styled.div`
     display: flex;
     flex-flow: column;
     position: relative;
     width: 100%;
 `

class Header extends Component {

    state = {
        showMenu: false
    }

    toggle = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    render() {

        const showMenu = this.state.showMenu

        return (
            <Container>
                <SearchBar />
                <LogoBar />
                <MenuBar toggleMenu={this.toggle} isMenuOpen={showMenu} />
                <MainMenu isMenuOpen={showMenu} />
            </Container>
        )
    }
}

export default Header
