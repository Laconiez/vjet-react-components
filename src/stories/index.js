/* eslint-disable */
import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
/* eslint-enable */

import buttonStories from './content/Button';
import inputStories from './content/Input';
import dimStories from './content/Dim';
import sidebarStories from './content/Sidebar';
import calendarStories from './content/Calendar';

buttonStories();
inputStories();
dimStories();
sidebarStories();
calendarStories();
