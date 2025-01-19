import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import theme from '../styles/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';

const OnboardingScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <ImageBackground
      source={require('../../assets/images/onboard.jpeg')} 
      style={styles.background}
      imageStyle={styles.imageStyle}
    >
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.tagline}>
          “Pooling our rides, {'\n'}sharing our vibes”
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={() => navigation.navigate('Role')}>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.signinButton]}>
            <Text style={styles.signinText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: theme.colors.background,
    opacity: 0.6,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },
  tagline: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: theme.colors.textPrimary,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 50,
    borderRadius: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30, 
    marginHorizontal: 5, 
    flex: 1, 
  },
  signupButton: {
    backgroundColor: theme.colors.background,
    marginRight: 10, 
    marginLeft: 10,
  },
  signinButton: {
    backgroundColor: theme.colors.buttonColor,
    marginRight: 10, 
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

export default OnboardingScreen;