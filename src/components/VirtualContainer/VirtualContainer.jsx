import React, { PureComponent } from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

const ContainerStyle = styled('div')``;

class VirtualContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <ContainerStyle>123</ContainerStyle>;
  }
}

VirtualContainer.propTypes = {
  items: pt.arrayOf(pt.any).isRequired,
  renderItem: pt.func.isRequired,
};

export default VirtualContainer;
