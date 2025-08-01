import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import theme from "../styles/theme"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const RoleScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
            <Image source={require('../../assets/images/role_screen.png')} />
            <Text style={{color:theme.colors.textPrimary, textAlign: "center", fontSize:32, fontWeight: "800"}}>What is your role?</Text>
            <Text style={{color:theme.colors.textPrimary, textAlign: "center", fontSize:16, fontWeight: "500", padding: 20}}>Help us in verifying more details. You can change the mode later.</Text>
            <TouchableOpacity style={styles.driverButton} onPress={() => navigation.navigate('DLUpload')}>
                <Text style={{color: theme.colors.textPrimary, textAlign:"center"}}>Driver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.passengerButton}>
                <Text style={{color: theme.colors.textPrimary, textAlign:"center"}}>Passenger</Text>
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
    driverButton: {
        backgroundColor: theme.colors.buttonColor,
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    passengerButton: {
        backgroundColor: theme.colors.textField,
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
});

export default RoleScreen;