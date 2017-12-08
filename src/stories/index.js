/* eslint-disable */
import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '../components/Button';
import Dim from '../components/Dim';
import Sidebar from '../components/Sidebar';

class SidebarWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: true,
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ opened: true });
          }}
        >
          Open sidebar
        </button>
        <Sidebar
          isOpened={this.state.opened}
          onClose={() => {
            this.setState({ opened: false });
          }}
        />
      </div>
    );
  }
}

storiesOf('Button', module).add('with text', () => <Button>test</Button>);

storiesOf('Dim', module)
  .add('simple fixed', () => <Dim />)
  .add('simple containerized', () => (
    <div style={{ position: 'absolute', width: '100px', height: '100px' }}>
      <Dim local />
    </div>
  ))
  .add('simple transparent', () => <Dim transparent>Dim</Dim>);

storiesOf('Sidebar', module).add('simple opened', () => <SidebarWrapper />);
