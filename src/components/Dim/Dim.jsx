import React from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import { flexDirectionColumn, justifyContentCenter, alignItemsCenter } from '../../styles/flex';

const DimStyle = styled('div')`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${props => (props.local ? 'position: absolute' : 'position: fixed')};
  ${props =>
    (props.transparent ? 'background-color: transparent' : 'background-color: rgba(0, 0, 0, 0.3)')};
  ${flexDirectionColumn} ${justifyContentCenter} ${alignItemsCenter};

  ${props => (props.visible ? 'display: flex' : 'display: none')};
`;

const Dim = ({
  children, local, transparent, visible, onClick,
}) => (
  <DimStyle local={local} transparent={transparent} visible={visible} onClick={onClick}>
    {children}
  </DimStyle>
);

Dim.propTypes = {
  children: pt.shape({}),
  local: pt.bool,
  transparent: pt.bool,
  visible: pt.bool,
  onClick: pt.func,
};

Dim.defaultProps = {
  children: undefined,
  local: false,
  transparent: false,
  onClick: undefined,
  visible: true,
};

export default Dim;
