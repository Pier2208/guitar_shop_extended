import React from 'react'
import styled from 'styled-components'


//styled components
const LogoBarWrapper = styled.div`
     display: flex;
     width: 100%;
     height: 23rem;
 `

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 70%;
    height: 100%;
    margin: 0 auto;
`

const Logo = styled.div`
    height: 17rem;
    width: 15rem;
    background-position: center !important;
    background-size: cover !important;
`
const LogoTitle = styled.div`
    display: flex;
    flex-direction: column;
    height: 17rem;
    width: 15rem;
`
const WordThe = styled.h2`
    font-family: 'Fredericka the Great', cursive;
    font-size: 4.5rem;
    margin: 0;
    transform: translateX(-1rem);
`
const WordGuitar = styled.h2`
    font-family: 'Fredericka the Great', cursive;
    color: #993418;
    font-size: 6rem;
    margin: 0;
    transform: rotate(-7deg) translateY(-1.5rem) translateX(-4rem);
`

const WordBass = styled.h2`
    font-family: 'Fredericka the Great', cursive;
    font-size: 2.5rem;
    margin: 0;
    transform: translateY(-2rem) translateX(9rem);
    
`
const WordShop = styled.h2`
    font-family: 'Fredericka the Great', cursive;
    font-size: 4.5rem;
    margin: 0;
    transform: translateY(-4rem) translateX(-3.5rem);
`

const LogoBar = () =>
    <LogoBarWrapper>
        <Container>
            <Logo 
                style={{
                    background: `url('https://res.cloudinary.com/dwhnxncff/image/upload/v1546376822/Guitar_shop_static_images/cat_logo_black.svg')`
                }}
            />
            <LogoTitle>
                <WordThe>The</WordThe>
                <WordGuitar>Guitar</WordGuitar>
                <WordBass>('n bass...)</WordBass>
                <WordShop>Shop</WordShop>
            </LogoTitle>
        </Container>
    </LogoBarWrapper>

export default LogoBar

