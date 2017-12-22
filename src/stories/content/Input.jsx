/* eslint-disable */
import React, { Component } from 'react';
import pt from 'prop-types';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Input from '../../components/Input';

class InputWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { inputValue } = this.props;

    return <Input value={inputValue} />;
  }
}

InputWrapper.propTypes = {
  inputValue: pt.string.isRequired,
};

export default function () {
  storiesOf('Input', module).add('simple', () => <InputWrapper inputValue="simple text" />);
}
