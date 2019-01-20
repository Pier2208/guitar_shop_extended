import React from 'react'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close'

//styled components
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 5rem;
    background-color: ${({ theme }) => theme.color.primaryDark};
    margin-bottom: 3rem;
`

const Title = styled.h2`
    color: ${({ theme }) => theme.color.fontLight};
    font-size: 2rem;
    font-weight: 300;
`

const CloseButton = styled.div`
    width: 2rem;
    height: 2rem;
    background: transparent;
    color: ${({ theme }) => theme.color.fontLight};
    svg{
        &:hover {
            transform: scale(1.1);
        }
    }
`


const ModalHeader = props => (
    <Wrapper>
        <Title>{props.title}</Title>
        <CloseButton onClick={() => props.onClose()}>
            <CloseIcon />
        </CloseButton>
    </Wrapper>
)

export default ModalHeader
