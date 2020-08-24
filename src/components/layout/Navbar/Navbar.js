import React, { useState } from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import './Navbar.module.scss';
import Navbar from 'react-bulma-components/lib/components/navbar';
import { useMediaQuery } from 'react-responsive';

const BulmaNavbar = () => {
  const [state, setState] = React.useState(false);
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 720px)' });

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
    <Navbar color={null} fixed="top" active={state} transparent={false}>
      <Navbar.Brand>
        <Navbar.Item href="/">TERRY CREAMER</Navbar.Item>
        <Navbar.Burger
          onClick={() => {
            handleClick();
          }}
        />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container position="end">
          {data.allWordpressPage.edges.map(edge => (
            <Navbar.Item href={edge.node.slug} key={edge.node.slug}>
              {edge.node.title}
            </Navbar.Item>
          ))}
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};
export default BulmaNavbar;
