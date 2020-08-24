import React from 'react';
import Layout from '../components/layout/Layout/Layout';
import PostList from '../components/blog/PostList/PostList';
import { useStaticQuery } from 'gatsby';

const Index = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressPost(sort: { fields: modified }) {
        edges {
          node {
            id
            title
            slug
            date
            modified
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      Header section
      <div>
        <hr />
        <PostList
          title={null}
          posts={data.allWordpressPost.edges
            .map(thisNode => thisNode.node)
            .reverse()}
        />
      </div>
    </Layout>
  );
};

export default Index;
