import React from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import padding from '../../styles/padding';

const InputStyle = styled('input')`
  padding: ${padding.s};
  background-color: white;
  border: solid 1px yellow;
`;

const Input = ({ value, onChange }) => <InputStyle value={value} onChange={onChange} />;

Input.propTypes = {
  value: pt.string.isRequired,
  onChange: pt.func.isRequired,
};

export default Input;
