import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../styles/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";

const UploadSelfieScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
        <Image source={require('../../assets/images/document_upload.png')} style={styles.topImage} />
        
        <TouchableOpacity style={styles.button}>
            <View style={styles.buttonRow}>
            <View style={styles.textWithIcon}>
                <Image source={require('../../assets/icons/selfie.png')} style={styles.icon} />
                <Text style={styles.buttonText}>Selfie with your vehicle</Text>
            </View>
            <Image source={require('../../assets/icons/forward_arrow.png')} style={styles.arrow} />
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
            <View style={styles.buttonRow}>
            <View style={styles.textWithIcon}>
                <Image source={require('../../assets/icons/selfie.png')} style={styles.icon} />
                <Text style={styles.buttonText}>Selfie with AKGEC sticker</Text>
            </View>
            <Image source={require('../../assets/icons/forward_arrow.png')} style={styles.arrow} />
            </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('NotificationPermission')}>
            <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topImage: {
        marginBottom: 20,
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: '#2D2D39',
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 20,
    },
    nextButton: {
        backgroundColor: theme.colors.buttonColor,
        width: '90%',
        padding: 20,
        borderRadius: 20,
        marginTop: 50,
    },
    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    textWithIcon: {
        flexDirection: 'row',
        alignItems: 'center', 
    },
    icon: {
        marginRight: 10,
        width: 24,
        height: 24, 
        resizeMode: 'contain',
    },
    arrow: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
    },
    buttonText: {
        color: theme.colors.textPrimary,
        fontSize: 16,
        fontWeight: '500',
    },
    nextButtonText: {
        color: theme.colors.textPrimary,
        textAlign: "center",
        fontSize: 16,
        fontWeight: '500',
    },
});

export default UploadSelfieScreen;