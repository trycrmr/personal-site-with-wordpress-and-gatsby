import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

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
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            {data.allWordpressPage.edges.map(edge => (
              <Link to={edge.node.slug} key={edge.node.slug}>
                {edge.node.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
