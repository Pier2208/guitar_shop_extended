import React from 'react'
import Header from '../../Header'
import PropTypes from 'prop-types'

const Layout = props => {
    return (
        <main>
            <Header />
            {props.children}
        </main>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout