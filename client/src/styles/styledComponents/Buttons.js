import styled from 'styled-components'
import { css } from 'styled-components'
import { lighten } from 'polished'

export const LogButton = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color.fontLight};
    font-weight: 300;
    font-size: 1.5rem;
    transition: all .2s;
    outline: none;
`
//API: buttons accept full, outlined and size props
export const Button = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10.5rem;
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 1rem 2rem;
        outline: none;
        cursor: pointer;
        font-family: 'Roboto';
        border-radius: 6px;
        transition: all .2s ease-in-out;
        ${({size}) => {
            if (size === 'small') {
                return `
                font-size: .9rem;
                padding: .5rem 1rem;
                width: 5rem
                `
            }
        }}

    ${props => props.full && css`
        background: ${({ theme }) => theme.color.primaryDark};
        color: ${({ theme }) => theme.color.fontLight};
        border: 1px solid ${({ theme }) => theme.color.fontDark};
        &:hover {
            background: ${lighten(0.1, props.theme.color.primaryDark)};
            border: 1px solid ${lighten(0.1, props.theme.color.primaryDark)};
        }
    `}  

    ${props => props.outlined && css`
        background: transparent;
        color: ${({ theme }) => theme.color.fontDark};
        border: 1px solid ${({ theme }) => theme.color.fontDark};
        &:hover {
            color: ${lighten(0.2, props.theme.color.primaryDark)};
            border: 1px solid ${lighten(0.2, props.theme.color.primaryDark)};
        }
    `}  
`