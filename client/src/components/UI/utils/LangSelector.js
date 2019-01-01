import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//styled components
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 4rem;
    padding: 0 1rem;
    margin-left: 3rem;
    svg {
        color: ${({theme}) => theme.fontColorLight};
        font-size: 1.3rem;
    }
`

const FlagNTagWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
`

const Flag = styled.div`
    width: 2rem;
    height: 1.3rem;
    background-position: top !important;
    background-size: cover !important;
`
const Tag = styled.span`
    color: ${({theme}) => theme.fontColorLight};
    font-size: 1.3rem;
    margin-left: .5rem;
`

class LangSelector extends Component {
    render() {
        return (
            <Wrapper>
                <FlagNTagWrapper>
                    <Flag style={{
                        background: `url('https://res.cloudinary.com/dwhnxncff/image/upload/v1546372123/Guitar_shop_static_images/ca.svg')`
                    }} />
                    <Tag>EN</Tag>
                </FlagNTagWrapper>
                <FontAwesomeIcon icon="chevron-down" />
            </Wrapper>
        )
    }
}

export default LangSelector
