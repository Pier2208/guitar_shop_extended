import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,700');
    @import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great');
    
    ${normalize()}

    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    *,
    *:after,
    *:before {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        color: ${({theme}) => theme.color.fontDark};
    }
    a {
        text-decoration: none;
    }
`