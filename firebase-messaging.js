import messaging from '@react-native-firebase/messaging';
import { getApp } from '@react-native-firebase/app';
import { getMessaging, getToken } from '@react-native-firebase/messaging';

const fetchFcmToken = async () => {
    const app = getApp();
    const messagingInstance = getMessaging(app);

    const token = await getToken(messagingInstance);
    console.log("FCM Token:", token);
};

messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Background message handled:', remoteMessage);
});

export { fetchFcmToken };
