import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from "../../styles/theme";
import { RootStackParamList } from "../../types";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import ProgressSteps from '../../components/ProgressSteps';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const SignUpScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [focusedInput, setFocusedInput] = useState<string | null>(null);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 2;

    const handleNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
            navigation.navigate('VerifyEmail');
        }
    };

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "1062628150817-uf92gvr3222gqo40nok0deb19cdk6mit.apps.googleusercontent.com",
            offlineAccess: true,
            forceCodeForRefreshToken: true,
        });
    }, []);

    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log(userInfo);
        } catch (error: any) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signing in');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play services not available');
            } else {
                console.log('Some other error happened');
                console.log(error.message);
                console.log(error.code);
            }
        }
    };

    return (
        <View style={styles.container}>
            <ProgressSteps
                currentStep={currentStep}
                totalSteps={totalSteps}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>
                    Authenticate and join the carpooling community for a ride-sharing revolution!
                </Text>
            </View>

            <View style={styles.form}>
                <View style={[
                    styles.inputContainer,
                    (focusedInput === 'email' || email.length > 0) && styles.inputContainerFilled,
                    focusedInput === 'email' && styles.inputContainerFocused
                ]}>
                    {(focusedInput === 'email' || email.length > 0) && <Text style={styles.floatingLabel}>Email</Text>}
                    <MaterialCommunityIcons name="email-outline" size={24} color={theme.colors.textPrimary} style={styles.inputIcon} />
                    <TextInput
                        placeholder={focusedInput === 'email' ? '' : 'Email'}
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor={theme.colors.textPrimary}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                    />
                </View>

                <View style={[
                    styles.inputContainer,
                    (focusedInput === 'password' || password.length > 0) && styles.inputContainerFilled,
                    focusedInput === 'password' && styles.inputContainerFocused
                ]}>
                    {(focusedInput === 'password' || password.length > 0) && <Text style={styles.floatingLabel}>Password</Text>}
                    <MaterialCommunityIcons name="lock-outline" size={24} color={theme.colors.textPrimary} style={styles.inputIcon} />
                    <TextInput
                        placeholder={focusedInput === 'password' ? '' : 'Password'}
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        placeholderTextColor={theme.colors.textPrimary}
                        onFocus={() => setFocusedInput('password')}
                        onBlur={() => setFocusedInput(null)}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <MaterialCommunityIcons
                            name={showPassword ? "eye-outline" : "eye-off-outline"}
                            size={24}
                            color={theme.colors.textPrimary}
                        />
                    </TouchableOpacity>
                </View>

                <View style={[
                    styles.inputContainer,
                    (focusedInput === 'confirmPassword' || confirmPassword.length > 0) && styles.inputContainerFilled,
                    focusedInput === 'confirmPassword' && styles.inputContainerFocused
                ]}>
                    {(focusedInput === 'confirmPassword' || confirmPassword.length > 0) && <Text style={styles.floatingLabel}>Confirm Password</Text>}
                    <MaterialCommunityIcons name="lock-outline" size={24} color={theme.colors.textPrimary} style={styles.inputIcon} />
                    <TextInput
                        placeholder={focusedInput === 'confirmPassword' ? '' : 'Confirm Password'}
                        style={styles.input}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        placeholderTextColor={theme.colors.textPrimary}
                        onFocus={() => setFocusedInput('confirmPassword')}
                        onBlur={() => setFocusedInput(null)}
                    />
                    <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                        <MaterialCommunityIcons
                            name={showConfirmPassword ? "eye-outline" : "eye-off-outline"}
                            size={24}
                            color={theme.colors.textPrimary}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={styles.terms}>
                    I agree to the{" "}
                    <Text style={styles.link}>Terms of Service</Text> and{" "}
                    <Text style={styles.link}>Privacy Policy</Text>
                </Text>

                <TouchableOpacity style={styles.createButton} onPress={handleNextStep}>
                    <Text style={{ color: theme.colors.textPrimary, textAlign: "center" }}>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.googleButton} onPress={googleSignIn}>
                    <Image source={require('../../../assets/icons/google.png')} style={styles.googleIcon} />
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>

                <View style={styles.signInContainer}>
                    <Text style={styles.terms}>Already have an account ? </Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 20,
        justifyContent: 'center'
    },
    header: {
        marginTop: 40,
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: theme.colors.textPrimary,
        marginBottom: 10,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.textPrimary,
        lineHeight: 24,
        textAlign: 'center'
    },
    form: {
        gap: 16,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: theme.colors.textField,
        borderRadius: 20,
        paddingHorizontal: 16,
        height: 56,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        position: 'relative',
    },
    inputContainerFilled: {
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.textField,
    },
    inputContainerFocused: {
        borderColor: theme.colors.buttonColor,
    },
    floatingLabel: {
        position: 'absolute',
        top: -10,
        left: 16,
        backgroundColor: theme.colors.background,
        paddingHorizontal: 4,
        fontSize: 12,
        color: theme.colors.textPrimary,
    },
    inputIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
        tintColor: "#666",
    },
    input: {
        flex: 1,
        color: theme.colors.textPrimary,
        fontSize: 16,
    },
    terms: {
        color: theme.colors.textLight,
        fontSize: 14,
        textAlign: "center",
    },
    link: {
        color: theme.colors.buttonColor,
    },
    createButton: {
        backgroundColor: theme.colors.buttonColor,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    googleButton: {
        flexDirection: "row",
        backgroundColor: theme.colors.textPrimary,
        justifyContent: 'center',
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    googleIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
        resizeMode: 'contain',
    },
    googleButtonText: {
        color: "#000000",
        fontSize: 16,
        fontWeight: "600",
    },
    signInContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 16,
    }
});

export default SignUpScreen;