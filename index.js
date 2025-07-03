/**
 * @format
 */

import './firebase-messaging';
import notifee, { EventType } from '@notifee/react-native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

notifee.onBackgroundEvent(async ({ type, detail }) => {
    const { notification } = detail;

    switch (type) {
        case EventType.DISMISSED:
            console.log('🔕 Notification dismissed:', notification?.id);
            break;
        case EventType.PRESS:
            console.log('👉 Notification pressed:', notification?.id);
            break;
    }
});

AppRegistry.registerComponent(appName, () => App);
