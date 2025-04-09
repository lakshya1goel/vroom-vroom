import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../styles/theme';

interface ProgressStepsProps {
    currentStep: number;
    totalSteps: number;
}

const ProgressSteps = ({ currentStep, totalSteps }: ProgressStepsProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <View
                    style={[
                        styles.progress,
                        { width: `${(currentStep / totalSteps) * 100}%` }
                    ]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    progressBar: {
        height: 4,
        backgroundColor: theme.colors.textField,
        borderRadius: 2,
        overflow: 'hidden',
    },
    progress: {
        height: '100%',
        backgroundColor: theme.colors.buttonColor,
        borderRadius: 2,
    },
});

export default ProgressSteps; 