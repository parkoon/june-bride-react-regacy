import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage: FunctionComponent = function () {
  return (
    <Layout>
      <Link to="/info/">To Info</Link>
    </Layout>
  )
}

export default IndexPage
