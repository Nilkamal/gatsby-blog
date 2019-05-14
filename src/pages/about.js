import React from "react"
import { Link } from "gatsby"

//components
import Layout from "../components/layout"
import Head from "../components/head"

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>
        I am React Developer, love to explore new technologies related to
        javascript :)
      </p>
      <p>
        Want to know more about me <Link to="/contact">Click Here</Link>
      </p>
    </Layout>
  )
}

export default aboutPage
