/* eslint-disable */
import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
/* eslint-enable */
import Container from '../../components/Container';

export default function () {
  storiesOf('Container', module)
    .add('simple', () => <Container>{[1, 2, 3, 4, 5].map(item => <div>{item}</div>)}</Container>)
    .add('in row', () => (
      <Container direction="row">{[1, 2, 3, 4, 5].map(item => <div>{item}</div>)}</Container>
    ))
    .add('in row from start', () => (
      <Container direction="row" justify="flex-start">
        {[1, 2, 3, 4, 5].map(item => <div>{item}</div>)}
      </Container>
    ))
    .add('in row from end', () => (
      <Container direction="row" justify="flex-end">
        {[1, 2, 3, 4, 5].map(item => <div>{item}</div>)}
      </Container>
    ))
    .add('in row with sparse', () => (
      <Container direction="row" justify="space-between">
        {[1, 2, 3, 4, 5].map(item => <div>{item}</div>)}
      </Container>
    ))
    .add('in row with space around', () => (
      <Container direction="row" justify="space-around">
        {[1, 2, 3, 4, 5].map(item => <div>{item}</div>)}
      </Container>
    ))
    .add('big data', () => {
      const data = [];
      for (let i = 0; i < 200; i += 1) {
        data.push(i);
      }

      return (
        <Container direction="row" justify="space-between">
          {data.map(item => (
            <div style={{ padding: '1rem', margin: '.5rem', border: '1px solid blue' }}>{item}</div>
          ))}
        </Container>
      );
    });
}
