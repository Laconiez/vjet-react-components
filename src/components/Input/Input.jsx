import React, { PureComponent } from 'react';
import styled from 'react-emotion';
import pt from 'prop-types';

import padding from '../../styles/padding';

const InputStyle = styled('input')`
  padding: ${padding.s};
  background-color: white;
  border: solid 1px yellow;
`;

const ErrorMessageStyle = styled('div')`
  ${props => (props.isError ? 'display: flex' : 'display: none')};
`;

const InputWrapper = styled('div')``;

class Input extends PureComponent {
  constructor(props) {
    super(props);
    const { value } = this.props;

    this.state = {
      initValue: value,
      pristine: true,
    };
  }

  onChange(e) {
    const { initValue, pristine } = this.state;
    const { value } = e.target;

    const isPristine = value === initValue;

    if (isPristine !== pristine) {
      this.setState({ pristine: isPristine });
    }
  }

  render() {
    const {
      value, onChange, isError, disabled, errorMessage,
    } = this.props;

    return (
      <InputWrapper>
        <InputStyle readonly={disabled} value={value} onChange={onChange} isError={isError} />
        <ErrorMessageStyle isError={isError}>{errorMessage}</ErrorMessageStyle>
      </InputWrapper>
    );
  }
}

Input.propTypes = {
  value: pt.string.isRequired,
  disabled: pt.bool,
  isError: pt.bool,
  errorMessage: pt.string,
  onChange: pt.func.isRequired,
};

Input.defaultProps = {
  disabled: false,
  isError: false,
  errorMessage: '',
};

export default Input;
