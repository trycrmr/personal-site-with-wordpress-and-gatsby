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
    const { posts, title } = this.props;
    return (
      <Section>
        <Heading size={4}>{title}</Heading>
        <Box>
          <Tile
            kind="ancestor"
            vertical
            style={{
              flexFlow: 'row wrap',
              width: 'min-content',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            {posts.map(post => {
              return (
                <Tile
                  kind="parent"
                  style={{
                    textAlign: 'center',
                    margin: 'auto',
                  }}
                >
                  <Link
                    to={post.slug}
                    style={{
                      color: 'black',
                      // backgroundColor: 'grey',
                      textShadow:
                        '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke',
                      textDecoration: 'underline',
                    }}
                  >
                    <BackgroundImage
                      fixed={
                        post.featured_media
                          ? post.featured_media.localFile.childImageSharp.fixed
                          : null
                      }
                      style={{
                        margin: 'auto',
                      }}
                    >
                      <Tile
                        key={post.id}
                        renderAs="article"
                        kind="child"
                        size={12}
                        style={{
                          textAlign: 'center',
                          margin: 'auto',
                        }}
                      >
                        <Section>
                          <Container style={{ margin: 'auto' }}>
                            {/* <code>{JSON.stringify(post)}</code> */}
                            <Heading
                              size="4"
                              style={{
                                textAlign: 'center',
                                margin: 'auto',
                                padding: 'auto',
                              }}
                            >
                              {post.title ? post.title : '[Untitled]'}
                            </Heading>
                          </Container>
                        </Section>
                      </Tile>
                    </BackgroundImage>
                  </Link>
                </Tile>
              );
            })}
          </Tile>
        </Box>
      </Section>
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
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`;
