import React from 'react';
import Layout from '../components/layout/Layout/Layout';
import PostList from '../components/blog/PostList/PostList';
import { useStaticQuery } from 'gatsby';
import Banner from '../components/layout/Banner';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

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
              localFile {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Banner />
      <Section
        style={{
          fontFamily: 'caption',
          lineHeight: '1.8',
          paddingBottom: '0px',
        }}
      >
        <Container>
          <main>
            <Content size="medium">
              <p>
                <span style={{ paddingRight: '4rem' }}></span>
                <span
                  style={{
                    fontSize: '4rem',
                    fontFamily: `caption`,
                    fontStyle: 'italic',
                    lineHeight: '0',
                    fontWeight: '700',
                  }}
                >
                  A
                </span>
                n ambitious professional and Founder of Grounded IT Solutions
                LLC (“Grounded IT”), an IT training and services company. Proven
                experience delivering customer needs in Full-Stack, DevOps,
                Cloud, and network-isolated applications. Primarily works on
                Node.js w/ React applications hosted on AWS. Has managed
                deployments of open source software written in PHP, specifically
                Matomo (fomerly Piwik), and WordPress. Algorithm experience
                consists of converting time series datasets into hierarchical,
                hashmap referenceable tree structures, resulting in a
                population-adjusted, global, over-time, low-bandwidth COVID-19
                aggregates analysis dashboard with planetary to U.S. County
                granularity served as a serverless, single page application.
                Managerial experience includes overseeing several practitioners
                and a portfolio of web applications for the State Department's
                Office of eDiplomacy. This website was built with GatsbyJS and
                uses a "Headless" WordPress site for content management.
                Generally considered to be a decent human being. Based in
                Washington, DC.
              </p>
            </Content>
          </main>
        </Container>
      </Section>
      <Section
        style={{
          // fontFamily: 'caption',
          // lineHeight: '1.8',
          paddingTop: '0px',
        }}
      >
        <Container>
          {/* <hr /> */}
          <PostList
            title="Latest Blog Posts"
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
