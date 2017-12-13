import React from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import Dim from '../Dim';

const SidebarStyle = styled('button')`
  z-index: 100;
`;

const Select = ({ children, isOpened, onClose }) => (
  <div>
    <SidebarStyle isOpened={isOpened}>{children}</SidebarStyle>
    <Dim
      visible={isOpened}
      transparent
      onClick={() => {
        onClose();
      }}
    />
  </div>
);

Select.propTypes = {
  children: pt.shape({}).isRequired,
  isOpened: pt.bool,
  onClose: pt.func.isRequired,
};

Select.defaultProps = {
  isOpened: false,
};

export default Select;
