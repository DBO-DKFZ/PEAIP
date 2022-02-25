// imports

// import modules
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import screens for navigation
import HomeScreen from './screens/home_screen.js';
import HomeScreen2 from './screens/home_screen2.js';
import ProfileScreen from './screens/profile_screen.js';
import ImpressumScreen from './screens/impressum_screen';
import DatenschutzScreen from './screens/privacy_screen';
import KontaktScreen from './screens/contact_screen';
import NotfallScreen from './screens/emergency_fct_screen';

const Stack = createStackNavigator();




function MyStack() {
  return ( 
    
      <Stack.Navigator initialRouteName="Home" 
  screenOptions={ 
        {headerTitleAlign: 'center', headerLeft: null, headerStyle: { backgroundColor: '#3b5998'}, headerTintColor: '#fff',
      headerTitleStyle: {fontSize: 24}}}>

        <Stack.Screen name=" " component={HomeScreen} />

        <Stack.Screen name="login" component={HomeScreen2} options={{
          title: '',
          headerTintColor: '#3b5998',
        }} />

        <Stack.Screen name="IMPLANTATPASS" 
        textAlign= 'center' alignSelf='center' component={ProfileScreen}/>

        <Stack.Screen name="Impressum" 
        textAlign= 'center' alignSelf='center' component={ImpressumScreen}/>

        <Stack.Screen name="Datenschutz" 
        textAlign= 'center' alignSelf='center' component={DatenschutzScreen}/>

        <Stack.Screen name="Kontakt" 
        textAlign= 'center' alignSelf='center' component={KontaktScreen}/>

        <Stack.Screen name="Notfall" 
        textAlign= 'center' alignSelf='center' component={NotfallScreen}/>
          
      </Stack.Navigator>
   
  );
}






export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
