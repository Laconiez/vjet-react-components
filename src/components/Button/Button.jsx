import React from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import padding from '../../styles/padding';

const ButtonStyle = styled('button')`
  padding: ${padding.m};
  background-color: red;
  border: solid 1px yellow;
`;

const Button = ({ children }) => <ButtonStyle>{children}</ButtonStyle>;

Button.propTypes = {
  children: pt.shape({}).isRequired,
};

export default Button;
