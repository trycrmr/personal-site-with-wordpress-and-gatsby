import React, { useState } from 'react';

const TrackMouse = props => {
  const [state, setState] = useState({ x: 500, y: 500 });

  const handleMouseMove = e => {
    setState({ x: e.clientX, y: e.clientY });
  };

  return <div onMouseMove={handleMouseMove}>{props.render(state)}</div>;
};

export default TrackMouse;
