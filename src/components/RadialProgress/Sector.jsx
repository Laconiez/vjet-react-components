import React from 'react';
// import styled from 'react-emotion';
import pt from 'prop-types';

// import padding from '../../styles/padding';

/* const ButtonStyle = styled('button')`
  padding: ${padding.m};
  background-color: red;
  border: solid 1px yellow;
`; */

const Sector = ({
  center, radius, strokeWidth, strokeColor, fill, arc,
}) => {
  let end = '';
  let start = null;

  if (arc) {
    start = `M${center},${strokeWidth / 2}`;
  } else {
    start = `M${center},${center} L${center},${strokeWidth / 2}`;
    end = 'z';
  }

  const d = `${start} ${firstArc} ${secondArc} ${end}`;
  return <path strokeWidth={strokeWidth} strokeColor={strokeColor} fill={fill} d={d} />;
};

Sector.propTypes = {
  center: pt.number.isRequired,
  radius: pt.number.isRequired,
  strokeWidth: pt.number,
  strokeColor: pt.string,
  fill: pt.string,
  arc: pt.bool,
};

Sector.defaultProps = {
  strokeWidth: 20,
  strokeColor: 'white',
  fill: '#DDD',
  arc: false,
};

export default Sector;
