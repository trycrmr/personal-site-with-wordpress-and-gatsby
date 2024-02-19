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
                      n ambitious professional with proven experience delivering customer needs in
                      Full-Stack, DevOps, Cloud, and network-isolated
                      applications. Generally considered to be a decent human
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
