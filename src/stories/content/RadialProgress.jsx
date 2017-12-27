/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import RadialProgress from '../../components/RadialProgress';

export default function () {
  storiesOf('RadialProgress', module).add('with text', () => (
    <RadialProgress size={100} radius={40} />
  ));
}
