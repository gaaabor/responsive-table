import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/main.scss'

// import Header from 'components/Header'
// import Footer from 'components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Responsive Table</title>
      </Helmet>
      <div id="app">
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
