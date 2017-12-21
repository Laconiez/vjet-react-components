import React from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import padding from '../../styles/padding';

const ContainerStyle = styled('div')`
  padding: ${padding.m};
  background-color: red;
  border: solid 1px yellow;
`;

const Container = ({ children, direction }) => (
  <ContainerStyle direction={direction}>{children}</ContainerStyle>
);

Container.propTypes = {
  children: pt.shape({}).isRequired,
  direction: pt.string,
};

Container.defaultProps = {
  direction: 'column',
};

export default Container;
