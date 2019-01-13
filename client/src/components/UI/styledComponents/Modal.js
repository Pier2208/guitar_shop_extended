import styled from 'styled-components'
import { css } from 'styled-components'


export const Overlay = styled.div`
    position: fixed; /* Stay in place */
    z-index: 1000 !important; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */  
`

export const ModalBox = styled.div`
    ${props => props.type === 'loginModal' && css`
        background-color: #fefefe;
        margin: 5% auto; /* 5% from the top and centered */
        outline: none;
        width: 23%;
        height: 50rem;
        z-index: 1000;
  `}
    ${props => props.type === 'registerModal' && css`
        background: #fff;
        margin: 5% auto; /* 5% from the top and centered */
        outline: none;
        width: 23%;
        height: auto;
        z-index: 1100 !important;
  `}
`