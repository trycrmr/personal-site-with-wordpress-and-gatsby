import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext, pathPrefix }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <nav>
      <div>
        {previousPagePath && (
          <div>
            <Link to={previousPagePath} rel="prev">
              Previous
            </Link>
          </div>
        )}
        {nextPagePath && (
          <div>
            <Link to={nextPagePath} rel="next">
              Next
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Pagination
