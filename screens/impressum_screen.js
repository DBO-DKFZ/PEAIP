import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button } from 'react-native';

 
function ImpressumScreen({ navigation }) {
  return (
    <Text style={{fontSize: 15, textAlign: 'left', marginTop: 20, marginLeft: 20}}> 
Verantwortlich: {"\n"}
Dr. med. Titus Brinker{"\n"}
Deutsches Krebsforschungszentrum – DKFZ{"\n"}
Digitale Biomarker für die Onkologie{"\n"}
Im Neuenheimer Feld 280{"\n"}
69120 Heidelberg{"\n"}

 {"\n"}

Bei redaktionellen Inhalten:{"\n"}

Verantwortlich nach § 55 Abs.2 RStV{"\n"}
Erika Mustermann{"\n"}
Musterstraße 2{"\n"}
80999 München </Text>
    )}
 
export default ImpressumScreen;