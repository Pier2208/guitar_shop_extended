import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'

import ModalManager from './components/ModalManager'

//theme and global styles
import { defaultTheme } from './styles'
import GlobalStyle from './styles/globalStyles'

//components (public)
import Layout from './components/UI/HOC/Layout'

//components (private)


//fontawesome library
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

//withAuth HOC



const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <GlobalStyle />
        <ModalManager />
        <div style={{position: 'relative', zIndex: -10}}>
          HOME
        </div>
      </Layout>
    </ThemeProvider>
  )
}

export default App