import styled from 'styled-components'

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