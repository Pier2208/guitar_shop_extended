import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

//theme
import { theme } from './styles/theme'

//components (public)
import Layout from './components/UI/HOC/Layout'

//components (private)

//withAuth HOC

//fontawesome library
library.add(fab, fas)

//global styles
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,700');
    
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
        color: ${({theme}) => theme.fontColorDark};
    }
    a {
        text-decoration: none;
    }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <div>
          APP
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App