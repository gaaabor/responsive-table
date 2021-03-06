import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import svg4everybody from 'svg4everybody'

import '../styles/main.scss'

// import Header from 'components/Header'
// import Footer from 'components/Footer'

const Layout = ({ children }) => {
  useEffect(() => {
    svg4everybody()
  }, [])

  return (
    <>
      <Helmet>
        <title>Responsive Table</title>
      </Helmet>
      <div id="app">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
