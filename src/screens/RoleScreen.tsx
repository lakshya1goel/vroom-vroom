import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import theme from "../styles/theme"

const RoleScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
            <Image source={require('../../assets/images/role_screen.png')} />
            <Text style={{color:theme.colors.textPrimary, textAlign: "center", fontSize:32, fontWeight: "800"}}>What is your role?</Text>
            <Text style={{color:theme.colors.textPrimary, textAlign: "center", fontSize:16, fontWeight: "500", padding: 20}}>Help us in verifying more details. You can change the mode later.</Text>
            <TouchableOpacity style={styles.driverButton}>
                <Text style={{color: theme.colors.textPrimary, textAlign:"center"}}>Driver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.passengerButton}>
                <Text style={{color: theme.colors.textPrimary, textAlign:"center"}}>Passenger</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RoleScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    driverButton: {
        backgroundColor: theme.colors.buttonColor,
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    passengerButton: {
        backgroundColor: '#2D2D39',
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    signupText: {
        color: theme.colors.textPrimary,
        fontSize: 16,
        fontWeight: '500',
    },
    signinText: {
        color: theme.colors.textPrimary,
        fontSize: 16,
        fontWeight: '500',
    },
});