import React from 'react';
import Layout from '../components/layout/Layout/Layout';
import { Link } from 'gatsby';
import Section from 'react-bulma-components/lib/components/section';

const NotFoundPage = () => (
  <Layout>
    <div>
      <Section className="only-text-page" style={{ fontSize: '5vmin' }}>
        <p>
          Sorry to say, no page exists at this url. If you think something
          should be here, <Link to={`/contact`}>contact me</Link>. Otherwise,
          why not visit the <Link to={`/`}>homepage</Link>, collect your
          bearings, and see if the content you seek can be accessed from there?
        </p>{' '}
        <br />
        <p>
          Regardless, happy to host you virtually; Come back anytime, and
          remember to enjoy life and love yourself.
        </p>
      </Section>
    </div>
  </Layout>
);

export default NotFoundPage;
