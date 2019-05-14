import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

//components
import Layout from "../components/layout"
import Head from "../components/head"

import blogStyles from "./blog.module.scss"

const blogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            publishedDate(formatString: "DD MMM YYYY")
            slug
            body {
              content {
                content {
                  value
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <Head title="Blog Posts" />
      <h1>Blog Posts</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(file => {
          const { title, publishedDate, slug } = file.node
          return (
            <li key={slug} className={blogStyles.post}>
              <Link to={`blog/${slug}`}>
                <h2>{title}</h2>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default blogPage
