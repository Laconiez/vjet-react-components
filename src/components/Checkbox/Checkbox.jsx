import React from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import uncheckedLogo from '../../../node_modules/ionicons/dist/svg/ios-radio-button-off.svg';
import checkedLogo from '../../../node_modules/ionicons/dist/svg/ios-checkmark-circle-outline.svg';

import padding from '../../styles/padding';

const CheckboxStyle = styled('div')`
  padding: ${padding.s};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
`;

const ImageStyle = styled('img')`
  width: 2rem;
  padding: ${padding.xs};
`;

const Checkbox = ({ value, title, onClick }) => (
  <CheckboxStyle onClick={onClick}>
    {value ? <ImageStyle src={checkedLogo} /> : <ImageStyle src={uncheckedLogo} />} {title}
  </CheckboxStyle>
);

Checkbox.propTypes = {
  value: pt.bool.isRequired,
  title: pt.string.isRequired,
  onClick: pt.func.isRequired,
};

export default Checkbox;
