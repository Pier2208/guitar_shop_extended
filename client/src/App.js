import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

//theme
import { theme } from './styles/theme'

//components (public)

//components (private)

//withAuth HOC

//fontawsone library
library.add(fab, fas)

//global styles
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
    
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
        font-family: 'Montserrat', sans-serif;
    }
    a {
        text-decoration: none;
        color: ${props => props.theme.accentColor};
    }
`

const App = () => {
  return (
      <div>
        APP
      </div>
  )
}

export default App