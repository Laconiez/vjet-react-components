import React, { Component } from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import padding from '../../styles/padding';

const InputStyle = styled('input')`
  padding: ${padding.s};
  background-color: white;
  border: solid 1px yellow;
`;

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pristine: true,
      initValue: '',
    };
  }
  componentWillReceiveProps() {
    this.setState({ initValue: this.props.value });
  }

  onChange(e) {
    const changedValue = e.target.value;
    const { initValue, pristine } = this.state;

    if ((changedValue !== initValue) !== pristine) {
      this.setState({ pristine: changedValue !== initValue });
    }
  }

  render() {
    const { value, onChange } = this.props;

    return <InputStyle value={value} onChange={onChange} />;
  }
}

Input.propTypes = {
  value: pt.string.isRequired,
  onChange: pt.func.isRequired,
};

export default Input;
