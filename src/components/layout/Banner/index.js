import React from 'react';
import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <Container>
      <Heading className={styles.alignCenter} size="1" weight="bold">
        TERRY CREAMER
      </Heading>
    </Container>
  );
};

export default Banner;
