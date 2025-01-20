import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import theme from "../styles/theme"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const NotificationPermissionScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
            <Image source={require('../../assets/images/notification.png')} />
            <Text style={{color:theme.colors.textPrimary, textAlign: "center", fontSize:32, fontWeight: "800"}}>Do you want to get notified ?</Text>
            <Text style={{color:theme.colors.textPrimary, textAlign: "center", fontSize:16, fontWeight: "500", padding: 20}}>You won’t miss offers, messages and calls from your driver</Text>
            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('LocationPermission')}>
                <Text style={{color: theme.colors.textPrimary, textAlign:"center"}}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.laterButton}>
                <Text style={{color: theme.colors.textPrimary, textAlign:"center"}}>Later</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueButton: {
        backgroundColor: theme.colors.buttonColor,
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    laterButton: {
        backgroundColor: '#2D2D39',
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
});

export default NotificationPermissionScreen;