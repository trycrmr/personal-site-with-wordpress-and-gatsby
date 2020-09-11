import React, { useState } from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import styles from './Banner.module.scss';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import Section from 'react-bulma-components/lib/components/section';
import Testimonial from '../Testimonial';
import Refresh from '../Refresh';

// TODO Haven't figured out a good way to swap these out when developing versus when deploying eq: "https://cms.terrycreamer.codes/wp-content/uploads/2020/06/profile-pic-june-2020-scaled.jpg" eq: "http://localhost:8080/wp-content/uploads/2020/06/profile-pic-june-2020-scaled.jpg"
const imgQuery = graphql`
  query {
    allWordpressWpMedia(
      filter: {
        source_url: {
          eq: "http://localhost:8080/wp-content/uploads/2020/06/profile-pic-june-2020-scaled.jpg"
        }
      }
    ) {
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

const Banner = props => {
  const data = useStaticQuery(imgQuery);
  const getTextShadow = mouse => {
    if (!mouse)
      return '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke';
    const calculateTextShadow = position => {
      return Math.ceil(position / 200);
    };

    return `${calculateTextShadow(mouse.x)}px ${calculateTextShadow(
      mouse.y
    )}px 6px whitesmoke, -${calculateTextShadow(
      mouse.x
    )}px ${calculateTextShadow(
      mouse.y
    )}px 6px whitesmoke, ${calculateTextShadow(
      mouse.x
    )}px -${calculateTextShadow(
      mouse.y
    )}px 6px whitesmoke, -${calculateTextShadow(
      mouse.x
    )}px -${calculateTextShadow(mouse.y)}px 6px whitesmoke`; // Note to self: right bottom, left bottom, right top, left top
  };
  const iconStyles = {
    textShadow:
      '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke',
    fontSize: '0.8rem',
  };
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
        size="medium"
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
              textShadow: getTextShadow(props.mouseLocation),
            }}
          >
            TERRY CREAMER
          </Heading>
          <Heading className={styles.alignCenter} weight="bold" size={4}>
            <button
              style={{
                fontSize: 'inherit',
                borderRadius: '0.5rem',
                // background: 'none',
                opacity: '0.5',
                cursor: 'pointer',
                boxShadow:
                  '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke',
              }}
            >
              <Refresh
                style={iconStyles}
                refreshFunction={props.refreshTestimonial}
              />
            </button>
          </Heading>
          <Heading
            className={styles.alignCenter}
            size={4}
            weight="bold"
            style={{
              color: 'black',
              textShadow:
                '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke',
            }}
          >
            <Testimonial text={props.testimonial} />
          </Heading>
        </Container>
      </Section>
    </BackgroundImage>
  );
};

export default Banner;
