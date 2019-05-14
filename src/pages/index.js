import React from "react"
import { Link } from "gatsby"

//components
import Layout from "../components/layout"
import Head from "../components/head"

const indexPage = props => {
  console.log(props)
  return (
    <Layout>
      <Head title="Home" />
      <h1>Nilkamal Shah</h1>
      <p>
        Hello, I am full stack javascript engineer. Living in beatiful city PUNE
      </p>
      <p>
        Need Developer ? <Link to="/about">About</Link>
      </p>
    </Layout>
  )
}

export default indexPage
