import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { TransitionPresets } from '@react-navigation/stack';
import VerifyEmail from '../screens/auth/VerifyEmail';
import SignUp from '../screens/auth/SignUp';

enableScreens();
const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
        </Stack.Navigator>
    );
};

export default AuthStack;