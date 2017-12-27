import React from 'react';
// import styled from 'react-emotion';
import pt from 'prop-types';

// import padding from '../../styles/padding';

/* const ButtonStyle = styled('button')`
  padding: ${padding.m};
  background-color: red;
  border: solid 1px yellow;
`; */

const Circle = ({
  center, radius, strokeWidth, strokeColor, fill,
}) => (
  <circle
    cx={center}
    cy={center}
    r={radius}
    strokeWidth={strokeWidth}
    stroke={strokeColor}
    fill={fill}
  />
);

Circle.propTypes = {
  center: pt.number.isRequired,
  radius: pt.number.isRequired,
  strokeWidth: pt.number,
  strokeColor: pt.string,
  fill: pt.string,
};

Circle.defaultProps = {
  strokeWidth: 20,
  strokeColor: 'white',
  fill: '#DDD',
};

export default Circle;
