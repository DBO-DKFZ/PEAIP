import React, {useState} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  CheckBox,
  TouchableOpacity,
  Button } from 'react-native';

 
function NotfallScreen({ navigation }) {

 
  return(
    <Text style={{fontSize: 15, textAlign: 'left', marginTop: 20, marginLeft: 25}}> 
Zur Aktvierung der Notfallfunktion, bitte über Ihre Smartphone-Einstellungen eine Sperrbildschirm-Benachrichtigung (Notification{"\n"}oder Shortcut) für diese App einrichten. {"\n"}

<View style={{ flexDirection: 'row' }}>





      <View>
      <Image
        style={{
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 110,
    marginBottom: 50
  }}
        source={{
          uri: 'http://www.sag-bonn.de/sites/default/files/field/image/infokugel_blau.png',
        }}
      />
      <Text style={{
    marginTop: -150,
    marginBottom: 400,
    padding: 15,
    borderColor: '#3b5998',
    backgroundColor: '#fdfbfb',
    borderWidth: 1,
    borderRadius: 6,
    width: 200,
    fontSize: 15,
    marginLeft: 105
  }}>Was ist die Notfallfunktion?{"\n"}
      {"\n"}
      Im Falle eines Notfalls ermöglichen Sie damit den Zugriff (z.B. von medizinischem Personal) auf ihre Daten über den Sperrbildschirm.
      </Text>
      </View>
      </View>

 </Text>

  )
}




export default NotfallScreen;