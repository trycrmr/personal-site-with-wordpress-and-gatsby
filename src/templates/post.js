import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import parse, { domToReact } from 'html-react-parser';
import Layout from '../components/layout/Layout/Layout';
import PostCode from '../components/blog/PostCode/PostCode';
import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
// import BackgroundImage from 'gatsby-background-image';
import '../styles/main.scss';

const getCode = node => {
  if (node.children.length > 0 && node.children[0].name === 'code') {
    return node.children[0].children;
  } else {
    return node.children;
  }
};

const getLanguage = node => {
  if (node.attribs.class != null) {
    // return node.attribs.class <== Doesn't work because wordpress adds a class to the "code" block
    return 'jsx'; // This is adequate because right now because I'd mostly post javascript and jsx.
  }
  return null;
};

const replaceCode = node => {
  if (node.name === 'pre') {
    return (
      node.children.length > 0 && (
        <PostCode language={getLanguage(node)}>
          {domToReact(getCode(node))}
        </PostCode>
      )
    );
  }
};

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  featuredMedia,
}) => {
  return (
    <div>
      {/* <BackgroundImage
        fixed={featuredMedia.localFile.childImageSharp.fixed}
        style={{
          textAlign: 'center',
          backgroundSize: 'contain',
          width: '100vw',
          height: 'unset',
        }}
      > */}
      <Section
        style={{
          maxHeight: '70vh',
          // minHeight: '400px',
          textAlign: 'center',
        }}
      >
        <Container>
          <Heading
            size={1}
            weight="bold"
            style={{
              color: 'black',
              textShadow:
                '1px 1px 6px whitesmoke, -1px 1px 6px whitesmoke, 1px -1px 6px whitesmoke, -1px -1px 6px whitesmoke',
            }}
          >
            {title}
          </Heading>
        </Container>
      </Section>
      {/* </BackgroundImage> */}
      <Section style={{ paddingTop: '0px' }}>
        <Container>
          <Content size="medium">
            <main>
              <figure>
                <div
                  style={{
                    width: 'fit-content',
                    margin: 'auto',
                    padding: '1rem',
                    WebkitBorderImage:
                      '-webkit-gradient(linear, left top, right bottom, from(#191919), to(#090909), color-stop(1, #090909), color-stop(1, #191919)) 30 30 30 30 stretch stretch',
                  }}
                >
                  <img src={featuredMedia.source_url}></img>
                  <figcaption>
                    {featuredMedia.caption.substring(
                      3,
                      featuredMedia.caption.length - 5
                    ) /* Not sure if this happens with every caption, but it appears paragraph tags are placed before and after the caption string when captured by WordPress. This results in malformed output without trimming them off. TBD if a more thoughtful fix is needed to make sure the caption is properly displayed on all posts.*/}
                  </figcaption>
                </div>
              </figure>
              <article>{parse(content, { replace: replaceCode })}</article>
            </main>
            <Section>
              {date} - posted by{' '}
              <Link to={`/author/${author.slug}`}>{author.name}</Link>
            </Section>
            {tags && tags.length ? (
              <div>
                <h4>Tags</h4>
                <ul>
                  {tags.map(tag => (
                    <li key={`${tag.slug}tag`}>
                      <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Content>
        </Container>
      </Section>
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
};

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data;

  return (
    <Layout>
      <Helmet title={`"${post.title}" -TERRY`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        author={post.author}
        featuredMedia={post.featured_media}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
      featured_media {
        caption
        source_url
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;
