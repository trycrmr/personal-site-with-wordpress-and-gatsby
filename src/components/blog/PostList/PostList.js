import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

export default class PostList extends React.Component {
  render() {
    const { posts, title } = this.props;
    return (
      <section>
        <div>
          {title ? (
            <div>
              <h1>{title}</h1>
            </div>
          ) : null}
          {posts.map(post => (
            <div key={post.id}>
              <p>
                <Link to={post.slug}>
                  {post.title ? post.title : '[Untitled]'}
                </Link>
              </p>
              <p>
                Last updated on {new Date(post.modified).toLocaleDateString()}
              </p>
              {post.featured_media ? (
                <img alt="test alt text" src={post.featured_media.source_url} />
              ) : (
                <img
                  alt="test alt text"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
                />
              )}
              <hr />
            </div>
          ))}
        </div>
      </section>
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
