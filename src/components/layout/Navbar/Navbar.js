import React from 'react'
import NavButton from '../NavButton/NavButton'
import { StaticQuery, graphql } from 'gatsby'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav>
        <>
          <NavButton to="/" text="TERRY CREAMER" />
        </>
        <>
          {data.allWordpressPage.edges.map(edge => (
            <NavButton
              to={edge.node.slug}
              key={edge.node.slug}
              text={edge.node.title}
            />
          ))}
        </>
      </nav>
    )}
  />
)

export default Navbar
