import {AppRegistry} from 'react-native';

import StorybookUIRoot from 'storybook';

import App from './App';
import {name as appName} from './app.json';


const showStorybook = true

if (showStorybook) {
	require('storybook')
} else {
	AppRegistry.registerComponent(appName, () => App);
}
