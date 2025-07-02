import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import notifee, { AndroidImportance } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    const setupNotifications = async () => {
      await notifee.requestPermission();

      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
      });

      messaging().onMessage(async remoteMessage => {
        console.log('📲 Foreground FCM message:', remoteMessage);

        await notifee.displayNotification({
          title: remoteMessage.notification?.title || 'Notification',
          body: remoteMessage.notification?.body || '',
          android: {
            channelId: 'default',
          },
        });
      });
    };

    setupNotifications();
  }, []);

  return <AppNavigator />;
};

export default App;
