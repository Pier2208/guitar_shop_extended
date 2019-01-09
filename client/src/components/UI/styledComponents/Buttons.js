import styled from 'styled-components'
import { css } from 'styled-components'
import { lighten } from 'polished'

export const LogButton = styled.button`
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.fontColorLight};
    font-weight: 300;
    font-size: 1.5rem;
    transition: all .2s;
    outline: none;
    :hover,
    :active {
        transform: scale(1.05) translateY(-1px);
    }
`

export const Button = styled.button`
    ${props => props.full && css`
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.primaryColorDark};
        color: ${({ theme }) => theme.fontColorLight};
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        padding: 1rem 2rem;
        outline: none;
        border: none;
        cursor: pointer;
        font-family: 'Roboto';
        border-radius: 5px;
        &:hover {
            background: ${lighten(0.1, '#3A2D32')};
        }
    `}  
`