import React from 'react';
// import styled from 'react-emotion';
import pt from 'prop-types';

// import padding from '../../styles/padding';

/* const ButtonStyle = styled('button')`
  padding: ${padding.m};
  background-color: red;
  border: solid 1px yellow;
`; */

function radians(degrees) {
  return degrees / 180 * Math.PI; // 180 * Math.PI
}

// Generates SVG arc string
function getArc(angle, radius, center) {
  const x = center + radius * Math.cos(radians(angle));
  const y = center + radius * Math.sin(radians(angle));

  return `A${radius},${radius} 1 0 1 ${x},${y}`;
}

export function getSectorPath({
  arc, angle, radius, center, strokeWidth,
}) {
  // Arc angles
  const firstAngle = angle > 180 ? 90 : angle - 90;
  const secondAngle = -270 + angle - 180;

  // Arcs
  const firstArc = getArc(firstAngle, radius, center);
  const secondArc = angle > 180 ? getArc(secondAngle, radius, center) : '';

  // start -> starting line
  // end -> will path be closed or not
  let end = '';
  let start = null;

  if (arc) {
    start = `M${center},${strokeWidth / 2}`;
  } else {
    start = `M${center},${center} L${center},${strokeWidth / 2}`;
    end = 'z';
  }

  return `${start} ${firstArc} ${secondArc} ${end}`;
}

const Sector = ({
  angle, center, radius, strokeWidth, strokeColor, arc,
}) => {
  // Colors
  const sectorFill = arc ? 'none' : strokeColor;
  const sectorStroke = arc ? strokeColor : 'none';

  return (
    <path
      strokeWidth={strokeWidth}
      fill={sectorFill}
      stroke={sectorStroke}
      d={getSectorPath({
        arc,
        angle,
        radius,
        center,
        strokeWidth,
      })}
    />
  );
};

Sector.propTypes = {
  angle: pt.number.isRequired,
  center: pt.number.isRequired,
  radius: pt.number.isRequired,
  strokeWidth: pt.number,
  strokeColor: pt.string,
  arc: pt.bool,
};

Sector.defaultProps = {
  strokeWidth: 20,
  strokeColor: 'white',
  arc: false,
};

export default Sector;
