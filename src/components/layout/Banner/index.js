import React, { useState } from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import styles from './Banner.module.scss';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import Section from 'react-bulma-components/lib/components/section';
import Testimonial from '../Testimonial'; // Not a React component at the moment. Returns a string testimonial. Leaving as it will probably become a component at some point.
const imgQuery = graphql`
  query {
    allWordpressWpMedia {
      edges {
        node {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

const Banner = () => {
  const [state, setstate] = useState(Testimonial());
  const data = useStaticQuery(imgQuery);
  return (
    <BackgroundImage
      fluid={
        data.allWordpressWpMedia.edges[0].node.localFile.childImageSharp.fluid
      }
      style={{
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
      }}
    >
      <Section
        size="large"
        style={{
          maxHeight: '70vh',
          minHeight: '400px',
        }}
      >
        <Container>
          <Heading
            className={styles.alignCenter}
            size={1}
            weight="bold"
            style={{
              color: 'black',
              textShadow:
                '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke',
            }}
          >
            TERRY CREAMER
          </Heading>
          <Heading
            className={styles.alignCenter}
            size={2}
            weight="bold"
            style={{
              color: 'black',
              textShadow:
                '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke',
            }}
          >
            {state}
          </Heading>
        </Container>
      </Section>
    </BackgroundImage>
  );
};

export default Banner;
