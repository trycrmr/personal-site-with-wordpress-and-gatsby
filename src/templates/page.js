import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout/Layout/Layout';
import Section from 'react-bulma-components/lib/components/section';
import Content from 'react-bulma-components/lib/components/content';
import '../styles/page.scss';

export const PageTemplate = ({ title, content }) => {
  return (
    <section>
      <div>
        {/* <Section
          size="medium"
          style={{
            maxHeight: '70vh',
            minHeight: '400px',
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
        </Section> */}
        <Section className="only-text-page">
          <Content>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Content>
        </Section>
      </div>
    </section>
  );
};

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const Page = ({ data }) => {
  const { wordpressPage: page } = data;

  return (
    <Layout>
      <PageTemplate title={page.title} content={page.content} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Page;

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
  }
`;
