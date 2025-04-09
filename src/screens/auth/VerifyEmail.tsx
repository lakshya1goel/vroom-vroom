import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import theme from "../../styles/theme";
import { useState, useRef } from "react";
import React from "react";
import ProgressSteps from '../../components/ProgressSteps';

const VerifyEmailScreen = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<Array<TextInput | null>>(new Array(6).fill(null));

    const handleOtpChange = (value: string, index: number) => {
        if (value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value.length === 1 && index < 5) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <View style={styles.container}>
            <ProgressSteps
                currentStep={2}
                totalSteps={2}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Verify your Email</Text>
                <Text style={styles.subtitle}>
                    You need to enter 4-digit code we have sent to your email address
                </Text>
            </View>

            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        ref={(el: TextInput | null) => {
                            inputRefs.current[index] = el;
                        }}
                        style={styles.otpInput}
                        value={digit}
                        placeholder="_"
                        placeholderTextColor={theme.colors.textPrimary}
                        onChangeText={(value) => handleOtpChange(value, index)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        keyboardType="number-pad"
                        maxLength={1}
                        selectTextOnFocus
                        caretHidden={true}
                    />
                ))}
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.resendContainer}>
                    <Text style={styles.question}>Didn't receive an email ? </Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Send again</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.confirmButton}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    header: {
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
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
        marginTop: 30,
        paddingHorizontal: 20,
    },
    otpInput: {
        width: 50,
        height: 60,
        borderRadius: 16,
        backgroundColor: theme.colors.textField,
        textAlign: 'center',
        fontSize: 24,
        color: theme.colors.textPrimary,
        paddingTop: 0,
        paddingBottom: 0,
    },
    contentContainer: {
        marginTop: 200,
        marginBottom: 20,
    },
    resendContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    question: {
        color: theme.colors.textLight,
        fontSize: 14,
        textAlign: "center",
    },
    link: {
        color: theme.colors.buttonColor,
        fontSize: 14,
    },
    confirmButton: {
        backgroundColor: theme.colors.buttonColor,
        padding: 20,
        borderRadius: 20,
        marginTop: 10,
    },
    buttonText: {
        color: theme.colors.textPrimary,
        textAlign: "center",
        fontSize: 16,
        fontWeight: '600',
    },
});

export default VerifyEmailScreen;