import React from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import padding from '../../styles/padding';

const ContainerStyle = styled('div')`
  padding: ${padding.m};
  border: solid 1px yellow;
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};
`;

const Container = ({
  children, direction, justify, align, wrap,
}) => (
  <ContainerStyle direction={direction} justify={justify} align={align} wrap={wrap}>
    {children}
  </ContainerStyle>
);

Container.propTypes = {
  children: pt.shape({}).isRequired,
  direction: pt.string,
  justify: pt.string,
  align: pt.string,
  wrap: pt.string,
};

Container.defaultProps = {
  direction: 'column',
  justify: 'center',
  align: 'center',
  wrap: 'wrap',
};

export default Container;
