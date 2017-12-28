/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import RadialProgress from '../../components/RadialProgress';

class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 30,
      arc: true,
      radius: 40,
      size: 100,
      strokeColor: 'red',
      strokeWidth: 20,
    };
  }

  render() {
    return (
      <div>
        <div>
          <RadialProgress
            arc={this.state.arc}
            size={this.state.size}
            radius={this.state.radius}
            strokeColor={this.state.strokeColor}
            progress={this.state.progress}
            strokeWidth={this.state.strokeWidth}
          />
        </div>
        <div>
          <span>progress:</span>
          <input
            value={this.state.progress}
            onChange={(e) => {
              this.setState({ progress: e.target.valueAsNumber });
            }}
            type="number"
          />
        </div>
        <div>
          <span>Arc/Circle: </span>
          <input
            checked={this.state.arc}
            onChange={() => {
              this.setState({ arc: !this.state.arc });
            }}
            type="checkbox"
          />
        </div>
        <div>
          <span>Radius: </span>
          <input
            value={this.state.radius}
            onChange={(e) => {
              this.setState({ radius: e.target.valueAsNumber });
            }}
            type="number"
          />
        </div>
        <div>
          <span>Size: </span>
          <input
            value={this.state.size}
            onChange={(e) => {
              this.setState({ size: e.target.valueAsNumber });
            }}
            type="number"
          />
        </div>
        <div>
          <span>Stroke color: </span>
          <input
            value={this.state.strokeColor}
            onChange={(e) => {
              this.setState({ strokeColor: e.target.value });
            }}
            type="text"
          />
        </div>
        <div>
          <span>Stroke width: </span>
          <input
            value={this.state.strokeWidth}
            onChange={(e) => {
              this.setState({ strokeWidth: e.target.value });
            }}
            type="number"
          />
        </div>
      </div>
    );
  }
}

export default function () {
  storiesOf('RadialProgress', module).add('with text', () => <Wrapper />);
}
