import React from 'react'
import { HamburgerSpin } from 'react-animated-burgers'


const HamburgerMenu = ({ isMenuOpen, toggleMenu }) =>
        <HamburgerSpin
            buttonColor="transparent"
            buttonWidth={30}
            barColor="white"
            buttonStyle={{
                outline: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0
            }}
            isActive={isMenuOpen} 
            toggleButton={() => toggleMenu()} 
            />


export default HamburgerMenu
