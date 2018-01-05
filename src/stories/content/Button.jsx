/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Button from '../../components/Button';

export default function () {
  storiesOf('Button', module)
    .add('with text', () => (
      <Button
        onClick={() => {
          console.log('clicked');
        }}
      >
        test
      </Button>
    ))
    .add('primary button', () => (
      <Button
        primary
        onClick={() => {
          console.log('clicked');
        }}
      >
        Primary
      </Button>
    ))
    .add('secondary button', () => (
      <Button
        secondary
        onClick={() => {
          console.log('clicked');
        }}
      >
        Secondary
      </Button>
    ))
    .add('linked button', () => (
      <Button
        linked
        onClick={() => {
          console.log('clicked');
        }}
      >
        Linked
      </Button>
    ))
    .add('disabled', () => (
      <Button
        disabled
        onClick={() => {
          console.log('clicked');
        }}
      >
        disabled
      </Button>
    ));
}
