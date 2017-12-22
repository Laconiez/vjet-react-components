/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Button from '../../components/Button';

export default function () {
  storiesOf('Button', module).add('with text', () => <Button>test</Button>);
}
