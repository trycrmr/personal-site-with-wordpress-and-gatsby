import React, { useState } from 'react';
import Layout from '../components/layout/Layout/Layout';
import PostList from '../components/blog/PostList/PostList';
import { useStaticQuery } from 'gatsby';
import Banner from '../components/layout/Banner';
import Section from 'react-bulma-components/lib/components/section';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import TrackMouse from '../components/utils/TrackMouse';

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

  const originalTestimonialState = {
    used: [],
    unused: [
      '9/10 say "Pretty good guy."',
      '4.90 Uber rating.',
      'Decades of React.js experience.',
      '"Certified Fresh" by critics on Rotten Tomatoes (86% audience score).',
      'Fitbit "High Tops" badge recipient.',
      'Pickup soccer Sportsmanship award 3x nominee.',
      '"Smarter than a cartoon owl professor." -Smart speakers everywhere',
      'When boarding the metro, moves to the center of the car.',
      'The most modest person ever.',
      'Consecutive annual attendance awardee (2nd and 3rd grade).',
      'A joy to have in class.',
    ],
    current: '100% library book return rate.',
  };

  const [testimonials, setTestimonials] = useState(originalTestimonialState);

  const handleTestUpdate = () => {
    //
    const getRandomIndex = () =>
      Math.floor(Math.random() * testimonials.unused.length);
    if (testimonials.unused.length === 0) {
      setTestimonials(originalTestimonialState);
    } else {
      let testimonialOptions = testimonials.unused;
      let newTestimonial = testimonialOptions.splice(getRandomIndex(), 1)[0];
      setTestimonials({
        unused: testimonialOptions,
        current: newTestimonial,
        used: [...testimonials.used, newTestimonial],
      });
    }
    return testimonials.current;
  };

  return (
    <TrackMouse
      render={state => {
        return (
          <Layout>
            <Banner
              testimonial={testimonials.current}
              refreshTestimonial={handleTestUpdate}
              mouseLocation={state}
            />
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
                      n ambitious professional and Founder of Grounded IT
                      Solutions LLC (“Grounded IT”), an IT training and services
                      company. Proven experience delivering customer needs in
                      Full-Stack, DevOps, Cloud, and network-isolated
                      applications. Primarily works on Node.js w/ React
                      applications hosted on AWS. Has worked as a developer or
                      managed applications written in PHP, Python, and Ruby, and
                      has similar experience with SQL and NoSQL databases.
                      Algorithm experience includes converting time series
                      datasets into hierarchical, hashmap referenceable tree
                      structures, resulting in a population-adjusted, global,
                      over-time, low-bandwidth COVID-19 aggregates analysis
                      dashboard with planetary to U.S. County granularity served
                      as a serverless, single page application. Managerial
                      experience includes overseeing several practitioners and a
                      portfolio of web applications for the State Department's
                      Office of eDiplomacy. This website was built with GatsbyJS
                      and uses a "Headless" WordPress site for content
                      management. Generally considered to be a decent human
                      being. Based in Washington, DC.
                    </p>
                  </Content>
                </main>
              </Container>
            </Section>
            <Section
              style={{
                paddingTop: '0px',
              }}
            >
              <PostList
                title="Latest Blog Posts"
                size={
                  'medium' /* Same as Section Bulma React Component setting, medium, large*/
                }
                posts={data.allWordpressPost.edges
                  .map(thisNode => thisNode.node)
                  .reverse()}
              />
            </Section>
          </Layout>
        );
      }}
    />
  );
};

export default Index;
