import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';

const Refresh = props => {
  const { refreshFunction } = props;
  const handleClick = e => {
    e.preventDefault();
    refreshFunction();
  };
  return (
    <FontAwesomeIcon icon={faRedo} onClick={handleClick}></FontAwesomeIcon>
  );
};

export default Refresh;
