/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Calendar from '../../components/Calendar';

export default function () {
  storiesOf('Calendar', module).add('default', () => <Calendar />);
}
