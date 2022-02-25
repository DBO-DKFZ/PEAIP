// imports

// import modules
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Button,
  TouchableHighlight,
  Alert,
  StatusBar as RnStatusBar,
} from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import * as LocalAuthentication from 'expo-local-authentication';



// home screen function with navigation
function HomeScreen2({ navigation }) {

const [isBiometricSupported, setIsBiometricSupported] = useState(false);






// Check if hardware supports biometrics
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const fallBackToDefaultAuth = () => {
    console.log('fall back to password authentication');
  };

const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      },
    ]);
  };

const handleBiometricAuth = async () => {
    // Check if hardware supports biometrics
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    // Fallback to default authentication method (password) if Fingerprint is not available
    if (!isBiometricAvailable)
      return alertComponent(
        'Bitte geben Sie Ihr Passwort ein.',
        'Biometrische Authentifizierung wird nicht unterstützt',
        'OK',
        () => fallBackToDefaultAuth()
      );

    // Check Biometrics types available (Fingerprint, Facial recognition, Iris recognition)
    let supportedBiometrics;
    if (isBiometricAvailable)
      supportedBiometrics = await LocalAuthentication.supportedAuthenticationTypesAsync();

    // Check Biometrics are saved locally in user's device
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return alertComponent(
        'Biometrische Daten wurden nicht gefunden.',
        'Bitte hinterlegen Sie Ihre biometrischen Daten in den Einstellungen Ihres Smartphones.',
        'OK',
        () => fallBackToDefaultAuth()
      );

    // Authenticate use with Biometrics (Fingerprint, Facial recognition, Iris recognition)

    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Anmeldung mit Biometrischen Daten',
      cancelLabel: 'Abbrechen',
      disableDeviceFallback: true
    });

      if (biometricAuth.success===true) {navigation.navigate('IMPLANTATPASS')}
     

    console.log({ isBiometricAvailable });
    console.log({ supportedBiometrics });
    console.log({ savedBiometrics });
    console.log({ biometricAuth });
  };


if (global.isSelected === "Ja"){
  return (

<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <View>    

<Text>

          {isBiometricSupported
            ? 'Ihr Gerät ist Biometrik-kompatibel.'
            : 'Gesicht-oder Fingerabdruckscanner sind auf diesem Gerät verfügbar.'}
        </Text>

        <TouchableHighlight
        >
          <Button style={{fontSize:18, height:50}}
            title="ANMELDEN"
            color="#3b5998"
            onPress={handleBiometricAuth}
          />
        </TouchableHighlight>
        
<StatusBar style="auto" />    




<TouchableOpacity style={{height:50,borderRadius: 4, alignItems:'center',justifyContent:'center', padding: 7}}
onPress={() => navigation.navigate('Impressum')}>
<Text style={{fontSize:18}}> Impressum </Text>
</TouchableOpacity>

<TouchableOpacity style={{height:50,borderRadius: 4, alignItems:'center',justifyContent:'center', padding: 7}}
onPress={() => navigation.navigate('Datenschutz')}>
<Text style={{fontSize:18}}> Datenschutz </Text>
</TouchableOpacity>

    </View>
    </SafeAreaView>
  );}



  else {
  return (

<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

    <View>

<Text>
          {isBiometricSupported
            ? 'Ihr Gerät ist Biometrik-kompatibel.'
            : 'Gesicht-oder Fingerabdruckscanner sind auf diesem Gerät verfügbar.'}
        </Text>

        <TouchableHighlight
        >
          <Button style={{fontSize:18, height:50}}
            title="ANMELDEN"
            color="#3b5998" 
            onPress={() => navigation.navigate('IMPLANTATPASS')}  
          />
        </TouchableHighlight>
        
<StatusBar style="auto" />    




<TouchableOpacity style={{height:50,borderRadius: 4, alignItems:'center',justifyContent:'center', padding: 7}}
onPress={() => navigation.navigate('Impressum')}>
<Text style={{fontSize:18}}> Impressum </Text>
</TouchableOpacity>

<TouchableOpacity style={{height:50,borderRadius: 4, alignItems:'center',justifyContent:'center', padding: 7}}
onPress={() => navigation.navigate('Datenschutz')}>
<Text style={{fontSize:18}}> Datenschutz </Text>
</TouchableOpacity>

    </View>
    </SafeAreaView>
  );}


}

export default HomeScreen2;