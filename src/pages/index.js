import React from 'react';
import Layout from '../components/layout/Layout/Layout';
import PostList from '../components/blog/PostList/PostList';
import { useStaticQuery } from 'gatsby';
import Banner from '../components/layout/Banner';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';

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
      <Section>
        <Banner />
      </Section>
      <Section>
        <Container>
          <hr />
          <PostList
            title={null}
            posts={data.allWordpressPost.edges
              .map(thisNode => thisNode.node)
              .reverse()}
          />
        </Container>
      </Section>
    </Layout>
  );
};

export default Index;
