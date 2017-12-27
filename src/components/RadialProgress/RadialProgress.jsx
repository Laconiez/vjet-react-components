// component is based on sector from https://github.com/Stanko/sektor

import React from 'react';
// import styled from 'react-emotion';
import pt from 'prop-types';

import Circle from './Circle';

/* import padding from '../../styles/padding';

const RadialProgressStyle = styled('button')`
  padding: ${padding.m};
  background-color: red;
  border: solid 1px yellow;
`; */

const RadialProgress = ({
  size, radius, strokeWidth, strokeColor, fill,
}) => {
  const center = size / 2;
  return (
    <svg>
      <Circle
        center={center}
        radius={radius}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
        fill={fill}
      />
    </svg>
  );
};

RadialProgress.propTypes = {
  size: pt.number.isRequired,
  radius: pt.number.isRequired,
  strokeWidth: pt.number,
  strokeColor: pt.string,
  fill: pt.string,
};

RadialProgress.defaultProps = {
  strokeWidth: 20,
  strokeColor: 'white',
  fill: '#DDD',
};

export default RadialProgress;
