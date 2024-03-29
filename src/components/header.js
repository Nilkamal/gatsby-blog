import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav className={headerStyles.navList}>
        <li>
          <Link
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className={headerStyles.navItem}
            activeClassName={headerStyles.navItemActive}
          >
            Blog
          </Link>
        </li>
      </nav>
    </header>
  )
}

export default Header
