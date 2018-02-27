import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from '../Button';

storiesOf('Buttona', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button!</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));
