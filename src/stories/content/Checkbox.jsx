/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Checkbox from '../../components/Checkbox';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  render() {
    return (
      <div>
        <Checkbox
          value={this.state.checked}
          title="test"
          onClick={() => {
            this.setState({ checked: !this.state.checked });
          }}
        />
      </div>
    );
  }
}

export default function () {
  storiesOf('Checkbox', module).add('simple', () => <Wrapper />);
}
