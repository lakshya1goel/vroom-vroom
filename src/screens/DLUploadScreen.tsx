import { View, StatusBar, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import theme from "../styles/theme";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const DLUploadScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.background} />
      <Image source={require('../../assets/images/document_upload.png')} style={styles.topImage} />
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonRow}>
          <View style={styles.textWithIcon}>
            <Image source={require('../../assets/icons/upload.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Upload Driving License</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color={theme.colors.buttonColor} />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonRow}>
          <View style={styles.textWithIcon}>
            <Image source={require('../../assets/icons/selfie.png')} style={styles.icon} />
            <Text style={styles.buttonText}>Selfie with Driving License</Text>
          </View>
          <MaterialIcons name="arrow-forward-ios" size={20} color={theme.colors.buttonColor} />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('UploadSelfie')}>
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
    backgroundColor: theme.colors.textField,
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

export default DLUploadScreen;