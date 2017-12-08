import React from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

// import padding from '../../styles/padding';
import Dim from '../Dim';

const barWidth = 200;

const SidebarStyle = styled('button')`
  position: fixed;

  top: 0;
  left: ${props => (props.isOpened ? 0 : `${-barWidth}px`)};
  bottom: 0;
  width: 200px;
  background-color: green;
  transition: left 0.3s ease;
  will-change: left;
  z-index: 100;
`;

const Sidebar = ({ children, isOpened, onClose }) => (
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

Sidebar.propTypes = {
  children: pt.shape({}).isRequired,
  isOpened: pt.bool,
  onClose: pt.func.isRequired,
};

Sidebar.defaultProps = {
  isOpened: false,
};

export default Sidebar;
