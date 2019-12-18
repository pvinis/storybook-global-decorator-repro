import { addDecorator } from '@storybook/react';
import {AppRegistry} from 'react-native'
import { configure, getStorybookUI } from '@storybook/react-native';

import './rn-addons';
import { loadStories } from './storyLoader';
import { centered } from './decorators/centered';

// global decorators
addDecorator(centered)

// import stories
configure(() => {
    // you can add local stories here, with require('./stories')
    loadStories(); // stories inside the ducks
}, module);

// To find allowed options for getStorybookUI
// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
const StorybookUIRoot = getStorybookUI({
    onDeviceUI: false,
});
AppRegistry.registerComponent('decorat', () => StorybookUIRoot);

export default StorybookUIRoot;
