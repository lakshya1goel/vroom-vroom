import React, { useEffect } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { useNavigation, NavigationProp, StackActions } from '@react-navigation/native';
import { RootStackParamList } from '../../App'; 
import theme from '../styles/theme';

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.dispatch(StackActions.replace('Onboarding'));
    }, 4000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <Image source={require('../../assets/icons/logo.png')} style={styles.logo} />
      <Image source={require('../../assets/icons/vroomvroom.png')} style={styles.logo} />
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
  logo: {
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default SplashScreen;