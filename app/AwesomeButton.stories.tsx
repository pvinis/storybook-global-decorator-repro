import { storiesOf } from '@storybook/react-native';
import React from 'react';

import {AwesomeButton} from './AwesomeButton';


storiesOf('AwesomeButton', module)
    .add('With id', () => (
        <AwesomeButton />
    ))
