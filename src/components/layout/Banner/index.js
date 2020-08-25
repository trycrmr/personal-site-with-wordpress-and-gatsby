import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import styles from './Banner.module.scss';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import Section from 'react-bulma-components/lib/components/section';

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
  const data = useStaticQuery(imgQuery);
  return (
    <BackgroundImage
      fluid={
        data.allWordpressWpMedia.edges[0].node.localFile.childImageSharp.fluid
      }
      style={{
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
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
              textShadow:
                '3px 3px 3px whitesmoke, -3px 3px 3px whitesmoke, 3px -3px 3px whitesmoke, -3px -3px 3px whitesmoke',
            }}
          >
            TERRY CREAMER
          </Heading>
        </Container>
      </Section>
    </BackgroundImage>
  );
};

export default Banner;
