import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout/Layout';
import PostList from '../components/blog/PostList/PostList';

const Category = props => {
  const { data, pageContext } = props;
  const { edges: posts, totalCount } = data.allWordpressPost;
  const { title: siteTitle } = data.site.siteMetadata;
  const { name: category } = pageContext;
  const title = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } in the “${category}” category`;

  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      <PostList
        posts={posts.map(thisNode => thisNode.node).reverse()}
        title={title}
      />
    </Layout>
  );
};

export default Category;

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(
      filter: { categories: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      totalCount
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`;
