import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import theme from "../styles/theme"
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const LocationPermissionScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
            <Image source={require('../../assets/images/location.png')} />
            <Text style={{color:theme.colors.textPrimary, textAlign: "center", fontSize:32, fontWeight: "800"}}>Turn your location on</Text>
            <Text style={{color:theme.colors.textPrimary, textAlign: "center", fontSize:16, fontWeight: "500", padding: 20}}>You’ll be able to find yourself on the map, and drivers will be able to find you at the pickup point</Text>
            <TouchableOpacity style={styles.enableButton}>
                <Text style={{color: theme.colors.textPrimary, textAlign:"center"}}>Enable location services</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: theme.colors.textPrimary, textAlign:"center"}}>Skip</Text>
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
    enableButton: {
        backgroundColor: theme.colors.buttonColor,
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    skipButton: {
        backgroundColor: theme.colors.textField,
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
});

export default LocationPermissionScreen;