/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Dim from '../../components/Dim';

export default function () {
  storiesOf('Dim', module)
    .add('simple fixed', () => <Dim />)
    .add('simple containerized', () => (
      <div style={{ position: 'absolute', width: '100px', height: '100px' }}>
        <Dim local />
      </div>
    ))
    .add('simple transparent', () => <Dim transparent>Dim</Dim>);
}
