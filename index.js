/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux'
import configstore from './store'
import React from 'react';

const AppData =() => (
    <Provider store={configstore}>
         <App />
    </Provider>)



AppRegistry.registerComponent(appName, () => AppData);


