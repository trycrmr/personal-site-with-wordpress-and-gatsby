import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './Navbar.module.scss';
import Navbar from 'react-bulma-components/lib/components/navbar';

const BulmaNavbar = () => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  const data = useStaticQuery(graphql`
    query {
      allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);

  return (
    <Navbar
      color="black"
      fixed="top"
      active={state}
      transparent={false}
      style={{
        fontWeight: '1000',
        padding: '0px',
        margin: '0px',
        maxWidth: '100vw',
      }}
    >
      <Navbar.Brand>
        <Navbar.Item href="/">TERRY</Navbar.Item>
        <Navbar.Burger
          onClick={() => {
            handleClick();
          }}
        />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container style={{ maxWidth: '200px' }} position="end">
          {data.allWordpressPage.edges.map(edge => (
            <Navbar.Item
              style={{ maxWidth: '200px' }}
              href={`/${edge.node.slug}`}
              key={edge.node.slug}
            >
              {edge.node.title}
            </Navbar.Item>
          ))}
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
export default BulmaNavbar;
