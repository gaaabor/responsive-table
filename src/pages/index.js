import React from 'react'

import Layout from 'components/Layout'
import Container from 'components/Container'

import Table from '../components/Table'

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <div id="placeholder" style={{ height: '100px' }} />
      <Container>
        <Table />
      </Container>
      <div id="placeholder" style={{ height: '100px' }} />
    </Layout>
  )
}

export default IndexPage
