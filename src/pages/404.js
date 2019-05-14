import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

//components
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="404" />
      <h1>Not found</h1>
      <p>
        <Link to="/">Lost ? Head Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound
