import React from 'react';
import { 
  StyleSheet,
  Linking,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  Button } from 'react-native';

 
function KontaktScreen({ navigation }) {

  if (global.len === 1 && global.implanttype === "Hüftimplantat") {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fdfbfb',
        alignItems: 'center',
        justifyContent: 'flex-start'}}>
      <Text style={{
      fontWeight:"bold",
      fontSize:20,
      color:"#022140",
      marginTop:20
      }}>Fragen zu Ihren Implantaten?</Text>
      <Text style={{fontSize: 15, marginLeft: -210, marginTop:20, fontWeight:"bold"}}>
          Hüftimplantate
          </Text>
          <Text style={{marginLeft: -18, marginTop: 20}}>
          Selbsthilfegruppe {"\n"}
          Durom-Metasul-LDH-Hüftprothesen e.V. {"\n"}
          c/o Hanspeter Hauke {"\n"}
          79312 Emmendingen Bachstraße 10 {"\n"}
          E-Mail: Hauke@durom-hueftprobleme.de {"\n"}
          Mobil: +49 176 60 33 73 20 {"\n"}
          {"\n"}
          Allgemeine Anfragen: {"\n"}
          Rita Fackler: +49 171 36 85 382 {"\n"}
          Adrienne van Driem: +49 761 40 98 925 {"\n"}
          Website: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.durom-hueftprobleme.de')}>
            https://www.durom-hueftprobleme.de
          </Text>
          </Text>
      </View>
    )
  }


  else if (global.len === 1 && global.implanttype === ""){
        return (
          <View style={{
          flex: 1,
          backgroundColor: '#fdfbfb',
          alignItems: 'center',
          justifyContent: 'flex-start'}}>
          <Text
          style={{
          fontWeight:"bold",
          fontSize:20,
          color:"#022140",
          marginTop:20
          }}>Fragen zu Ihren Implantaten?</Text>
          </View>
        )}




else if (global.len === 1 && global.implanttype === "Weitere"){
          return (
            <View style={{
            flex: 1,
            backgroundColor: '#fdfbfb',
            alignItems: 'center',
            justifyContent: 'flex-start'}}>
            <Text
            style={{
            fontWeight:"bold",
            fontSize:20,
            color:"#022140",
            marginTop:20
            }}
            >Fragen zu Ihren Implantaten?</Text>
            <Text style={{fontSize: 15, marginLeft: -190, marginTop:20, fontWeight:"bold"}}>
          Weitere Implantate
          </Text>
            <Text style={{marginLeft: -148, marginTop: 20}}          >Weitere Selbsthilfegruppen
          </Text>
            </View>
          )}




else if (global.len === 1 && global.implanttype === "Brustimplantat"){
        return (
        <View style={{
        flex: 1,
        backgroundColor: '#fdfbfb',
        alignItems: 'center',
        justifyContent: 'flex-start'}}>
        <Text
        style={{
        fontWeight:"bold",
        fontSize:20,
        color:"#022140",
        marginTop:20
        }}
        >Fragen zu Ihren Implantaten?</Text>
        <Text style={{fontSize: 15, marginLeft: -210, marginTop:20, fontWeight:"bold"}}>
          Brustimplantate
          </Text>

        <Text style={{
        marginLeft: -18, 
        marginTop: 20
        }}>
          Frauenselbsthilfe Krebs - Bundesverband e.V. {"\n"}
          Thomas-Mann-Str. 40 {"\n"}
          53111 Bonn {"\n"}
          Telefonnummer: 0228 33 88 9-400 {"\n"}
          Faxnummer: 0228 33 88 9-401 {"\n"}
          Erreichbarkeit: {"\n"}
          Mo. - Do. 9.00 - 15.00 Uhr (Kernzeit) {"\n"}
          Fr. 8.00 - 12.00 Uhr (Kernzeit) {"\n"}
          E-Mail: kontakt@frauenselbsthilfe.de {"\n"}
          Website: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.frauenselbsthilfe.de/')}>
            https://www.frauenselbsthilfe.de/
          </Text>
          {"\n"}
          {"\n"}
          Selbsthilfegruppen: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.frauenselbsthilfe.de/kontakt/gruppen-vor-ort.html')}>
            Zu den Selbthilfegruppen
          </Text>
          {"\n"}
          Telefonberatung: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.frauenselbsthilfe.de/kontakt/beratung-am-telefon.html')}>
          Zur Telefonberatung
          </Text>
          {"\n"}
          Forum: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://forum.frauenselbsthilfe.de/')}>
          Zum Forum
          </Text>
          {"\n"}
          Informationsmaterial: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.frauenselbsthilfe.de/medien/broschueren-orientierungshilfen.html')}>
          Zum Informationsmaterial
          </Text>
          {"\n"}
          {"\n"}
          {"\n"}
          BRCA-Netzwerk e.V. Geschäftsstelle{"\n"}
          Thomas-Mann-Str. 40{"\n"}
          53111 Bonn {"\n"}
          Telefon: 0228 - 33889-100{"\n"}
          Telefax: 0228 - 33889-110{"\n"}
          Email: info@brca-netzwerk.de{"\n"}
          Internet:  <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL("www.brca-netzwerk.de")}>Zur Website
          </Text>{"\n"}
          </Text>

        </View>
)}





else if (global.len === 1 && global.implanttype ===  "Knieimplantat") {
        return (
          <View style={{
        flex: 1,
        backgroundColor: '#fdfbfb',
        alignItems: 'center',
        justifyContent: 'flex-start'}}>
        <Text
        style={{
        fontWeight:"bold",
        fontSize:20,
        color:"#022140",
        marginTop:20
        }}
        >Fragen zu Ihren Implantaten?</Text>
        <Text style={{fontSize: 15, marginLeft: -210, marginTop:20, fontWeight:"bold"}}>
          Knieimplantate
          </Text>

          <Text style={{
          marginLeft: -28, 
          marginTop: 20
          }}>
          Hüft-Rücken-Knieprobleme {"\n"}
          Selbsthilfekontaktstelle Synapse Lichtenberg {"\n"}
          Schulze-Boysen-Str. 38{"\n"}
          10365  Berlin / Lichtenberg {"\n"}
          Tel: 030 55 49 18 92 {"\n"}
          Fax: 030 55489634 {"\n"}
          E_Mail: selbsthilfe.synapse@kiezspinne.de {"\n"}
          Website: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('http://www.kiezspinne.de')}>
            http://www.kiezspinne.de
          </Text>
          </Text>

        </View>
        )}

  else if (global.len >= 1){
    return (
      <ScrollView>
      <View style={{
        flex: 1,
        backgroundColor: '#fdfbfb',
        alignItems: 'center',
        justifyContent: 'flex-start'}}>
      <Text style={{
      fontWeight:"bold",
      fontSize:20,
      color:"#022140",
      marginTop:20
      }}>Fragen zu Ihren Implantaten?</Text>
      <Text style={{fontSize: 15, marginLeft: -210, marginTop:20, fontWeight:"bold"}}>
          Hüftimplantate
          </Text>
          <Text style={{marginLeft: -18, marginTop: 20}}>
          Selbsthilfegruppe {"\n"}
          Durom-Metasul-LDH-Hüftprothesen e.V. {"\n"}
          c/o Hanspeter Hauke {"\n"}
          79312 Emmendingen Bachstraße 10 {"\n"}
          E-Mail: Hauke@durom-hueftprobleme.de {"\n"}
          Mobil: +49 176 60 33 73 20 {"\n"}
          {"\n"}
          Allgemeine Anfragen: {"\n"}
          Rita Fackler: +49 171 36 85 382 {"\n"}
          Adrienne van Driem: +49 761 40 98 925 {"\n"}
          Website: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.durom-hueftprobleme.de')}>
            https://www.durom-hueftprobleme.de
          </Text>
          </Text>

<Text style={{fontSize: 15, marginLeft: -210, marginTop:20, fontWeight:"bold"}}>
          Brustimplantate
          </Text>

        <Text style={{
        marginLeft: -18, 
        marginTop: 20
        }}>
          Frauenselbsthilfe Krebs - Bundesverband e.V. {"\n"}
          Thomas-Mann-Str. 40 {"\n"}
          53111 Bonn {"\n"}
          Telefonnummer: 0228 33 88 9-400 {"\n"}
          Faxnummer: 0228 33 88 9-401 {"\n"}
          Erreichbarkeit: {"\n"}
          Mo. - Do. 9.00 - 15.00 Uhr (Kernzeit) {"\n"}
          Fr. 8.00 - 12.00 Uhr (Kernzeit) {"\n"}
          E-Mail: kontakt@frauenselbsthilfe.de {"\n"}
          Website: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.frauenselbsthilfe.de/')}>
            https://www.frauenselbsthilfe.de/
          </Text>
          {"\n"}
          {"\n"}
          Selbsthilfegruppen: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.frauenselbsthilfe.de/kontakt/gruppen-vor-ort.html')}>
            Zu den Selbthilfegruppen
          </Text>
          {"\n"}
          Telefonberatung: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.frauenselbsthilfe.de/kontakt/beratung-am-telefon.html')}>
          Zur Telefonberatung
          </Text>
          {"\n"}
          Forum: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://forum.frauenselbsthilfe.de/')}>
          Zum Forum
          </Text>
          {"\n"}
          Informationsmaterial: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('https://www.frauenselbsthilfe.de/medien/broschueren-orientierungshilfen.html')}>
          Zum Informationsmaterial
          </Text>
          {"\n"}
          {"\n"}
          {"\n"}
          BRCA-Netzwerk e.V. Geschäftsstelle{"\n"}
          Thomas-Mann-Str. 40{"\n"}
          53111 Bonn {"\n"}
          Telefon: 0228 - 33889-100{"\n"}
          Telefax: 0228 - 33889-110{"\n"}
          Email: info@brca-netzwerk.de{"\n"}
          Internet:  <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL("www.brca-netzwerk.de")}>Zur Website
          </Text>{"\n"}
          </Text>

          <Text style={{fontSize: 15, marginLeft: -210, marginTop:20, fontWeight:"bold"}}>
          Knieimplantate
          </Text>

          <Text style={{
          marginLeft: -28, 
          marginTop: 20
          }}>
          Hüft-Rücken-Knieprobleme {"\n"}
          Selbsthilfekontaktstelle Synapse Lichtenberg {"\n"}
          Schulze-Boysen-Str. 38{"\n"}
          10365  Berlin / Lichtenberg {"\n"}
          Tel: 030 55 49 18 92 {"\n"}
          Fax: 030 55489634 {"\n"}
          E_Mail: selbsthilfe.synapse@kiezspinne.de {"\n"}
          Website: {" "}
          <Text style={{color: 'blue'}}
            onPress={() => Linking.openURL('http://www.kiezspinne.de')}>
            http://www.kiezspinne.de
          </Text>
          </Text>

      </View>
      </ScrollView>
    )
  }


else {
        return (
          <View style={{
        flex: 1,
        backgroundColor: '#fdfbfb',
        alignItems: 'center',
        justifyContent: 'flex-start'}}>
        <Text
        style={{
        fontWeight:"bold",
        fontSize:20,
        color:"#022140",
        marginTop:20
        }}
        >Fragen zu Ihren Implantaten?</Text>
        <Text style={{fontSize: 15, marginLeft: 0, marginTop:20}}>
          Sie haben keinen Implantattyp ausgewählt.
          </Text>

        </View>
        )}



}
 
export default KontaktScreen;