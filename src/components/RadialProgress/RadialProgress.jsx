// component is based on sector from https://github.com/Stanko/sektor

import React from 'react';
// import styled from 'react-emotion';
import pt from 'prop-types';

import Circle from './Circle';
import Sector from './Sector';

/* import padding from '../../styles/padding';

const RadialProgressStyle = styled('button')`
  padding: ${padding.m};
  background-color: red;
  border: solid 1px yellow;
`; */

const RadialProgress = ({
  size, radius, strokeWidth, strokeColor, fill, progress, arc,
}) => {
  const center = size / 2;
  const angle = progress / 100 * 360;
  return (
    <svg>
      {/* <Circle
        center={center}
        radius={radius}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
        fill={fill}
      /> */}
      <Sector
        arc={arc}
        angle={angle}
        radius={radius}
        center={center}
        strokeWidth={strokeWidth}
        strokeColor={strokeColor}
      />
    </svg>
  );
};
// angle, center, radius, strokeWidth, strokeColor, arc,

RadialProgress.propTypes = {
  progress: pt.number.isRequired,
  size: pt.number.isRequired,
  radius: pt.number.isRequired,
  strokeWidth: pt.number,
  strokeColor: pt.string,
  fill: pt.string,
  arc: pt.bool,
};

RadialProgress.defaultProps = {
  strokeWidth: 20,
  strokeColor: 'white',
  fill: '#DDD',
  arc: true,
};

export default RadialProgress;
