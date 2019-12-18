import { storiesOf } from '@storybook/react-native';
import React from 'react';

import {AwesomeButton} from './AwesomeButton';
import { centered } from 'storybook/helpers';


storiesOf('AwesomeButton', module)
	// .addDecorator(centered)
    .add('With id', () => (
        <AwesomeButton />
    ))
