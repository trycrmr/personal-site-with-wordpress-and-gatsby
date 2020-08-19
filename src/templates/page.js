import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout/Layout/Layout'

export const PageTemplate = ({ title, content }) => {
  return (
    <section>
      <div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate title={page.title} content={page.content} />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`
