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
        <Box>
          <Tile kind="ancestor" vertical>
            {posts.map(post => {
              return (
                <Tile kind="parent" size={12}>
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
                    >
                      <Section>
                        <Container
                          style={{
                            textAlign: 'center',
                          }}
                        >
                          {/* <code>{JSON.stringify(post)}</code> */}
                          <Heading style={{ textAlign: 'center' }}>
                            <Link
                              to={post.slug}
                              style={{
                                color: 'whitesmoke',
                                backgroundColor: 'grey',
                              }}
                            >
                              {post.title ? post.title : '[Untitled]'}
                            </Link>
                          </Heading>
                          <span
                            style={{
                              backgroundColor: 'grey',
                            }}
                          >
                            Last updated on{' '}
                            {new Date(post.modified).toLocaleDateString()}
                          </span>
                        </Container>
                      </Section>
                    </Tile>
                  </BackgroundImage>
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
