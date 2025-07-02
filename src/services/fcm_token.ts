import messaging from '@react-native-firebase/messaging';
import { Platform, PermissionsAndroid } from 'react-native';

export const getFcmToken = async (userId: string) => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (!enabled) return;

    if (Platform.OS === 'android') {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    }

    const token = await messaging().getToken();
    console.log("FCM Token:", token);
};
