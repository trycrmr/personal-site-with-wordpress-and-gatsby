import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Tile from 'react-bulma-components/lib/components/tile';
import Box from 'react-bulma-components/lib/components/box';
import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import BackgroundImage from 'gatsby-background-image';

export default class PostList extends React.Component {
  render() {
    const { posts, title, size } = this.props;
    return (
      <>
        <Heading
          size={4}
          style={{
            alignContent: 'center',
            textAlign: 'center',
            paddingTop: '2rem',
          }}
        >
          {title}
        </Heading>
        <Box style={{ backgroundColor: 'black' }}>
          <Tile
            kind="ancestor"
            vertical
            style={{
              flexFlow: 'row wrap',
              justifyContent: 'center',
              alignItems: 'flex-start',
              backgroundColor: 'black',
              margin: 'auto',
            }}
          >
            {posts.map(post => {
              if (post.id === 'f2dbe1f1-c7ba-57e9-b536-845c18263841')
                return null; // filters out hello world post. My understanding is media cannot be queried on unpublished posts. The banner needs the image associated with this post, but this post is throwaway content. With that said, don't love this. Hopefully I'm mistaken about the constraints on querying images.
              return (
                <Tile
                  kind="parent"
                  key={post.id}
                  style={{ padding: '0px', flexGrow: '0' }}
                >
                  <div
                    style={{
                      padding: '1rem',
                      margin: 'auto',
                      width: 'fit-content',
                      maxWidth: '100%',
                      WebkitBorderImage:
                        '-webkit-gradient(linear, left top, right bottom, from(#191919), to(#090909), color-stop(1, #090909), color-stop(1, #191919)) 30 30 30 30 stretch stretch',
                    }}
                  >
                    <Link
                      to={post.slug}
                      style={{
                        color: 'black',
                        textShadow:
                          '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke',
                        textDecoration: 'underline',
                        flexFlow: 'row wrap',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        width: '100%',
                        display: 'flex',
                      }}
                    >
                      <BackgroundImage
                        fixed={
                          post.featured_media
                            ? post.featured_media.localFile.childImageSharp
                                .fixed
                            : null
                        }
                        style={{
                          margin: 'auto',
                          border: '5px solid black',
                        }}
                      >
                        <Tile
                          key={post.id}
                          renderAs="article"
                          kind="child"
                          size={12}
                          style={{ height: 'inherit' }}
                        >
                          <Section
                            style={{
                              height: 'inherit',
                              width: 'inherit',
                              display: 'flex',
                              alignContent: 'center',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}
                          >
                            <Heading size={4} style={{ textAlign: 'center' }}>
                              {post.title ? post.title : '[Untitled]'}
                            </Heading>
                          </Section>
                        </Tile>
                      </BackgroundImage>
                    </Link>
                  </div>
                </Tile>
              );
            })}
          </Tile>
        </Box>
      </>
    );
  }
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    slug
    date
    modified
    excerpt
    author {
      name
      avatar_urls {
        wordpress_48
      }
    }
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
`;
