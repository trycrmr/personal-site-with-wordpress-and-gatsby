import React from 'react';
import Helmet from 'react-helmet';
import styles from './Layout.module.scss';
import Navbar from '../Navbar/Navbar';

const TemplateWrapper = ({ children }) => (
  <div className={styles.layout}>
    {/* <Helmet title="TERRY CREAMER" /> */}
    <Helmet
      // {/* (optional) callback that tracks DOM changes */}
      onChangeClientState={(newState, addedTags, removedTags) =>
        console.log(newState, addedTags, removedTags)
      }
    >
      {/* html attributes */}
      <html lang="en" />
      {/* multiple meta elements */}
      <meta
        name="description"
        content="Terry Creamer's personal website. The projects and musings of a passionate web developer based in Washington D.C."
      />
      <meta property="og:type" content="article" />
      {/* multiple link elements */}
      <link rel="canonical" href="https://terrycreamer.codes" />
      <link
        rel="apple-touch-icon"
        href="https://terrycreamer.codes/img/apple-touch-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="https://terrycreamer.codes/img/apple-touch-icon-72x72.png"
      />
      {/* inline script elements */}
      <script type="application/ld+json">
        {`
        {
            "@context": "http://schema.org"
        }
    `}
      </script>
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
);

export default TemplateWrapper;
