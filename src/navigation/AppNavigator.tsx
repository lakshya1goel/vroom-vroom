import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import RoleScreen from '../screens/RoleScreen';
import { RootStackParamList } from '../types';
import DLUploadScreen from '../screens/DLUploadScreen';
import UploadSelfieScreen from '../screens/UploadSelfieScreen';
import NotificationPermissionScreen from '../screens/NotificationPermissionScreen';
import LocationPermissionScreen from '../screens/LocationPermissionScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Role" component={RoleScreen} />
            <Stack.Screen name="DLUpload" component={DLUploadScreen} />
            <Stack.Screen name="UploadSelfie" component={UploadSelfieScreen} />
            <Stack.Screen name="NotificationPermission" component={NotificationPermissionScreen} />
            <Stack.Screen name="LocationPermission" component={LocationPermissionScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;  