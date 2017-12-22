/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Sidebar from '../../components/Sidebar';

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

export default function () {
  storiesOf('Sidebar', module).add('simple opened', () => <SidebarWrapper />);
}
