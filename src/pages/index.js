import React from 'react'

import Layout from 'components/Layout'
import Container from 'components/Container'

import Table from '../components/Table'

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Container>
        <Table />
      </Container>
    </Layout>
  )
}

export default IndexPage
