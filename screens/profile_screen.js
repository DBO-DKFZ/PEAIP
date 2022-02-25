//imports

// import modules
import React, { useState, useCallback, useContext, useEffect, useRef, useReducer, useMemo } from 'react';
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  SafeAreaView,
  ComponentContainer,
  InputContainer,
  Input,
  Animated,
  TouchableHighlight,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Accordion from '../components/Accordion.js';
import RNPickerSelect from 'react-native-picker-select';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { AsyncStorage } from 'react-native';

// const STORAGE_KEY = '@save_implantdata';

var implants;
var implanttype;
var setImplanttype;
var currentImplanttype;
var currentbothside;
const PickerOption = (props) => {
  const [implanttype, setImplanttype] = useState('Implantattyp');

  global.implanttype = implanttype;
  global.setImplanttype;
  global.currentImplanttype;
  global.currentbothside = currentbothside;

  return (
    <View>
      <View
        style={{
          height: 60,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#737373',
          outline: 'none',
          fontSize: 20,
          width: 200,
          paddingVertical: 0,
        }}>

        

          <TextInput
          id="implantattyp-text1"
          label="implanttype"
          onChangeText={(text) => this.setState({ implanttype: text })}
        />


        

        <RNPickerSelect
          selectedValue={implanttype}
          placeholder={{ label: 'Implantattyp', value: '' }}
          style={{
            placeholder: {
              color: '#a9a9a9', 
            },
            inputIOS: { height: 40, fontSize: 20, marginTop: 6 },
            inputAndroid: {
              placeholder: { color: 'red' },
              color: '#a9a9a9',
              height: 40,
              fontSize: 20,
              marginLeft: -8,
            },    
          }}
          onValueChange={(currentImplanttype) =>
            setImplanttype(currentImplanttype)
          }
          items={[
            { label: 'Hüftimplantat', value: 'Hüftimplantat' },
            { label: 'Brustimplantat', value: 'Brustimplantat' },
            { label: 'Knieimplantat', value: 'Knieimplantat' },
            { label: 'Weitere', value: 'Weitere' },
          ]}
        />
      </View>
    </View>
  );
};

var len;
global.len = len;

var isSelected;
var setSelection;
var currentSelection;
const PickerSecuredLogin = (props) => {
  const [isSelected, setSelection] = useState(false);

  global.isSelected = isSelected;
  global.setSelection;
  global.currentSelection;

  return (
    <View>
      <View
        style={{
          height: 60,
          alignItems: 'center',
          marginTop: -390,
          borderBottomWidth: 1,
          borderBottomColor: '#737373',
          outline: 'none',
          marginLeft: 50,
          fontSize: 16,
          width: 265,
          paddingVertical: 0,
        }}>
        <TextInput
          id="secured-text1"
          label="isSelected"
          onChangeText={(text) => this.setState({ isSelected: text })}
        />

        <RNPickerSelect
          selectedValue={isSelected}
          placeholder={{ label: 'Auswahl', value: '' }}
          style={{
            textAlign: 'center',
            placeholder: {
              color: '#a9a9a9',
            },
            inputIOS: {
              height: 40,
              fontSize: 16,
              marginTop: 6,
              textAlign: 'center',
            },
            inputAndroid: {
              placeholder: { color: 'red' },
              color: '#a9a9a9',
              height: 40,
              fontSize: 16,
              marginLeft: -8,
              textAlign: 'center',
            },
          }}
          onValueChange={(currentSelection) => setSelection(currentSelection)}
          items={[
            { label: 'Ja, sicherer Login', value: 'Ja' },
            { label: 'Nein, kein sicherer Login', value: 'Nein' },
          ]}
        />
      </View>
    </View>
  );
};

var bothside;
const PickerBothside = (key) => {
  const [bothside, setbothside] = useState('Lokalisation');
  global.bothside = bothside;
  console.log('render_bothside');
  return (
    <View>
      <View
        style={{
          height: 40,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: '#737373',
          outline: 'none',
          fontSize: 20,
          width: 200,
          paddingVertical: 0,
        }}>
        <TextInput
          id="bothside-text1"
          label="bothside"
          onChangeText={(...bothside) => setbothside(bothside)}
        />

        <RNPickerSelect
          selectedValue={bothside}
          placeholder={{ label: 'Lokalisation', value: '' }}
          style={{
            placeholder: {
              color: '#a9a9a9',
            },
            inputIOS: { height: 40, fontSize: 20, marginTop: -15 },
            inputAndroid: {
              placeholder: { color: 'red' },
              color: '#a9a9a9',
              height: 40,
              fontSize: 20,
              marginLeft: -8,
              marginTop: -20,
            },
          }}
          onValueChange={(currentbothside) => setbothside(currentbothside)}
          items={[
            { label: 'linksseitig', value: 'linksseitig' },
            { label: 'rechtsseitig', value: 'rechtsseitig' },
          ]}
        />
      </View>
    </View>
  );
};


class Counter extends React.Component {
  state = { count: 1 };
  setCount = () =>
    this.setState((prevState) => ({
      ...prevState,
      count: this.state.count + 1,
    })).bind(this);

  render() {
    const { count } = this.state;

    return (
      <View>
        <View>
          <Text
            style={{
              height: 40,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#737373',
              outline: 'none',
              paddingTop: 6,
              fontSize: 20,
              width: 250,
            }}>
            Gesamt: {count} {count > 1 ? 'Implantate' : 'Implantat'}
          </Text>
        </View>
      </View>
    );
  }
}

// const deleteHandler = (key)=>{
function deleteHandler({ key, inputs, setInputs }) {
  const _inputs = inputs.filter((input, index) => index != key);
  setInputs(_inputs);
}

// const editHandler = (key) => {
function editHandler({
  key,
  inputs,
  textImplantatbezeichnung,
  textSeriennummer,
  textHerstellerinformation,
  textImplantationsdatum,
  textEinrichtung,
  textImplantArzt,
  textZusatzinformationen,
  setEdit,
}) {
  
  inputs[key] = {
    implantattyp: global.implanttype,
    lokalisation: global.bothside,
    implantatbezeichnung: textImplantatbezeichnung,
    seriennummer: textSeriennummer,
    herstellinformation: textHerstellerinformation,
    implantationsdatum: textImplantationsdatum,
    einrichtung: textEinrichtung,
    arzt: textImplantArzt,
    zusatzinfo: textZusatzinformationen,
  };
  console.log(inputs);
  setEdit(false);
}

// const editor = (key) => {
function editor({ key, inputs, setEdit }) {
  inputs[key] = {
    implantattyp: 'Implantattyp',
    lokalisation: 'Lokalisation',
    implantatbezeichnung: 'Implantatbezeichnung',
    seriennummer: 'Seriennummer',
    herstellinformation: 'Herstellerinformation',
    implantationsdatum: 'Implantationsdatum',
    einrichtung: 'Einrichtung',
    arzt: 'Implantierender Arzt',
    zusatzinfo: 'Zusatzinformationen',
  };
  setEdit(true);
}

// const addHandler = ()=>{
function addHandler({ inputs, setInputs }) {
  const _inputs = [...inputs];
  _inputs.push({
    implantattyp: 'Implantattyp',
    lokalisation: 'Lokalisation',
    implantatbezeichnung: 'Implantatbezeichnung',
    seriennummer: 'Seriennummer',
    herstellinformation: 'Herstellerinformation',
    implantationsdatum: 'Implantationsdatum',
    einrichtung: 'Einrichtung',
    arzt: 'Implantierender Arzt',
    zusatzinfo: 'Zusatzinformationen',
  });
  setInputs(_inputs);
}



const ImplantArray = ({props}) => {
  const implants = [];
  implants.push(props);
  console.log('implants', implants);
  return (null);
};



function Adder({ props }) {
  const [isEditing, setEdit] = useState(false);
  

  const [inputs, setInputs] = useState([
    {
      implantattyp: 'Implantattyp',
      lokalisation: 'Lokalisation',
      implantatbezeichnung: 'Implantatbezeichnung',
      seriennummer: 'Seriennummer',
      herstellinformation: 'Herstellerinformation',
      implantationsdatum: 'Implantationsdatum',
      einrichtung: 'Einrichtung',
      arzt: 'Implantierender Arzt',
      zusatzinfo: 'Zusatzinformationen',
    },
  ]);

  global.inputs = inputs;
  

  const [textImplantatbezeichnung, setTextImplantatbezeichnung] = useState(
    'Implantatbezeichnung'
  );
  const [textSeriennummer, setTextSeriennummer] = useState('Seriennummer');
  const [textHerstellerinformation, setTextHerstellerinformation] = useState(
    'Herstellerinformation'
  );
  const [textImplantationsdatum, setTextImplantationsdatum] =
    useState('Implantationsdatum');
  const [textEinrichtung, setTextEinrichtung] = useState('Einrichtung');
  const [textImplantArzt, setTextImplantArzt] = useState(
    'Implantierender Arzt'
  );
  const [textZusatzinformationen, setTextZusatzinformationen] = useState(
    'Zusatzinformationen'
  );

  const seriennummer = useMemo(() => setTextSeriennummer(textSeriennummer), [textSeriennummer]);



global.len = inputs.length;

  return (
    <View>
      <View>
        <View>
          <Text
            style={{
              height: 40,
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: '#737373',
              outline: 'none',
              paddingLeft: 2,
              paddingTop: 6,
              marginTop: -161,
              fontSize: 20,
              width: 250,
            }}>
            Gesamt: {inputs.length}{' '}
            {inputs.length > 1 || inputs.length < 1
              ? 'Implantate'
              : 'Implantat'}
          </Text>
        </View>
      </View>

      <Text>{console.log(inputs)}</Text>
     
  
      <ScrollView>
        {inputs.map((input, key) => (
         
          <View>
            <View style={{ marginLeft: -57 }}>
              <Accordion
                title=<Text>Implantat {key + 1}</Text>
                data=<View>
                  <TouchableOpacity
                    onPress={() => deleteHandler({ key, inputs, setInputs })}>
                    <Text
                      style={{ fontSize: 20, marginBottom: 10 }}
                      textAlign="center">
                      Implantat {key + 1} löschen{' '}
                      <Ionicons
                        name="ios-trash-bin-outline"
                        size={20}
                        color="black"
                      />
                    </Text>
                  </TouchableOpacity>

                  {isEditing ? (
                    <TouchableOpacity
                      onPress={() =>
                        editHandler({
                          key,
                          inputs,
                          textImplantatbezeichnung,
                          textSeriennummer,
                          textHerstellerinformation,
                          textImplantationsdatum,
                          textEinrichtung,
                          textImplantArzt,
                          textZusatzinformationen,
                          setEdit,
                        })
                      }>
                      <Text
                        style={{ fontSize: 20, marginBottom: 10 }}
                        textAlign="center">
                        Speichern
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => editor({ key, inputs, setEdit })}>
                      <Text
                        style={{ fontSize: 20, marginBottom: 10 }}
                        textAlign="center">
                        Implantat {key + 1} bearbeiten
                      </Text>
                    </TouchableOpacity>
                  )}

                  {isEditing ? (
                    <PickerOption props={inputs[key].implantattyp}/>
                  ) : (
                    <Text
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].implantattyp}
                    </Text>
                  )}

                  <ImplantArray/>

                  {isEditing ? (
                    <PickerBothside />
                  ) : (
                    <Text
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].lokalisation}
                    </Text>
                  )}

                  

                  {isEditing ? (
                    <TextInput
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        color: 'gray',
                        fontSize: 20,
                      }}
                      placeholder="Implantatbezeichnung"
                      onChangeText={(...textImplantatbezeichnung) =>
                        setTextImplantatbezeichnung(textImplantatbezeichnung)
                      }
                      defaultValue={
                        textImplantatbezeichnung.implantatbezeichnung
                      }
                      value={textImplantatbezeichnung}
                    />
                  ) : (
                    <Text
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].implantatbezeichnung}
                    </Text>
                  )}

                  {isEditing ? (
                    <TextInput
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        color: 'gray',
                        fontSize: 20,
                      }}
                      placeholder="Seriennummer"
                      onChangeText={(...textSeriennummer) => setTextSeriennummer(textSeriennummer)}
                      defaultValue={textSeriennummer.seriennummer}
                      value={textSeriennummer}
                    />
                  ) : (
                    <Text
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].seriennummer}
                    </Text>
                  )}


                  {isEditing ? (
                    <TextInput
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        color: 'gray',
                        fontSize: 20,
                      }}
                      placeholder="Herstellerinformation"
                      onChangeText={(...textHerstellerinformation) =>
                        setTextHerstellerinformation(textHerstellerinformation)
                      }
                      defaultValue={
                        textHerstellerinformation.herstellerinformation
                      }
                      value={textHerstellerinformation}
                    />
                  ) : (
                    <Text
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].herstellinformation}
                    </Text>
                  )}

                  {isEditing ? (
                    <TextInput
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        color: 'gray',
                        fontSize: 20,
                      }}
                      placeholder="Implantationsdatum"
                      onChangeText={(...textImplantationsdatum) =>
                        setTextImplantationsdatum(textImplantationsdatum)
                      }
                      defaultValue={textImplantationsdatum.implantationsdatum}
                      value={textImplantationsdatum}
                    />
                  ) : (
                    <Text
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].implantationsdatum}
                    </Text>
                  )}

                  {isEditing ? (
                    <TextInput
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        color: 'gray',
                        fontSize: 20,
                      }}
                      placeholder="Einrichtung"
                      onChangeText={(...textEinrichtung) =>
                        setTextEinrichtung(textEinrichtung)
                      }
                      defaultValue={textEinrichtung.einrichtung}
                      value={textEinrichtung}
                    />
                  ) : (
                    <Text
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].einrichtung}
                    </Text>
                  )}

                  {isEditing ? (
                    <TextInput
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        color: 'gray',
                        fontSize: 20,
                      }}
                      placeholder="Implantierender Arzt"
                      onChangeText={(...textImplantArzt) =>
                        setTextImplantArzt(textImplantArzt)
                      }
                      defaultValue={textImplantArzt.implantierenderarzt}
                      value={textImplantArzt}
                    />
                  ) : (
                    <Text
                      style={{
                        height: 40,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].arzt}
                    </Text>
                  )}

                  {isEditing ? (
                    <TextInput
                      multiline
                      rows={4}
                      style={{
                        height: 120,
                        alignItems: 'flex-end',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        color: 'gray',
                        fontSize: 20,
                      }}
                      placeholder="Zusatzinformationen"
                      onChangeText={(...textZusatzinformationen) =>
                        setTextZusatzinformationen(textZusatzinformationen)
                      }
                      defaultValue={textZusatzinformationen.zusatzinformationen}
                      value={textZusatzinformationen}
                    />
                  ) : (
                    <Text
                      style={{
                        height: 120,
                        alignItems: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#737373',
                        outline: 'none',
                        paddingTop: 6,
                        fontSize: 20,
                        width: 200,
                      }}>
                      {inputs[key].zusatzinfo}
                    </Text>
                  )}
                </View>
              />
            </View>
          </View>
        ))}
        <TouchableOpacity onPress={() => addHandler({ inputs, setInputs })}>
          <Text style={{ fontSize: 20, marginLeft: 25, marginTop: 10 }}>
            Implantat hinzufügen{' '}
            <AntDesign name="pluscircleo" size={20} color="black" />
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const Adder2 = React.memo(Adder);

function ProfileScreen({ props, navigation }) {
  const [isEditing, setEdit] = useState(false);

  const [textNachname, setTextNachname] = useState('Nachname');
  const [textVorname, setTextVorname] = useState('Vorname');
  const [textGeburtsdatum, setTextGeburtsdatum] = useState('Geburtsdatum');

  const [getValue, setGetValue] = useState('');
  

  return (
    <View style={{ flex: 1 }}>
      <View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            marginLeft: 105,
            height: 70,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 5,
            width: 160,
          }}>
          <Text
            style={{ fontSize: 18 }}
            onPress={() =>
              navigation.navigate('login', { paramKey: isSelected })
            }>
            ABMELDEN <Ionicons name="exit-outline" size={40} color="black" />
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                marginLeft: 10,
                marginBottom: 10,
                marginTop: 420,
              }}>
              Bitte tragen Sie Ihre Daten in die entsprechenden Felder ein.
            </Text>
          </View>

          {isEditing ? (
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: '#e2e2e2',
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 7,
                width: 250,
              }}>
              <Text style={{ fontSize: 18 }} onPress={() => setEdit(false)}>
                SPEICHERN
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                height: 50,
                backgroundColor: '#e2e2e2',
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 7,
                width: 250,
              }}>
              <Text style={{ fontSize: 18 }} onPress={() => setEdit(true)}>
                DATEN BEARBEITEN{' '}
                <AntDesign name="edit" size={20} color="black" />
              </Text>
            </TouchableOpacity>
          )}

          <View style={{ padding: 10 }}>
            {isEditing ? (
              <TextInput
                style={{
                  height: 40,
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#737373',
                  outline: 'none',
                  color: 'gray',
                  fontSize: 20,
                  width: 250,
                }}
                id="Nachname_text"
                placeholder="Nachname"
                label="Nachname"

                onChangeText={(data) => setTextNachname(data)}
                defaultValue={textNachname.Nachname}
                value={textNachname}
              />
            ) : (
              <Text
                style={{
                  height: 40,
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#737373',
                  outline: 'none',
                  paddingTop: 6,
                  fontSize: 20,
                  width: 250,
                }}>
                {textNachname}
              </Text>
            )}

            {isEditing ? (
              <TextInput
                style={{
                  height: 40,
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#737373',
                  outline: 'none',
                  color: 'gray',
                  fontSize: 20,
                  width: 250,
                }}
                placeholder="Vorname"
                onChangeText={(textVorname) => setTextVorname(textVorname)}
                defaultValue={textVorname.Vorname}
                value={textVorname}
              />
            ) : (
              <Text
                style={{
                  height: 40,
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#737373',
                  outline: 'none',
                  paddingTop: 6,
                  fontSize: 20,
                  width: 250,
                }}>
                {textVorname}
              </Text>
            )}

            {isEditing ? (
              <TextInput
                style={{
                  height: 40,
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#737373',
                  outline: 'none',
                  color: 'gray',
                  fontSize: 20,
                  width: 250,
                }}
                placeholder="Geburtsdatum"
                onChangeText={(textGeburtsdatum) =>
                  setTextGeburtsdatum(textGeburtsdatum)
                }
                defaultValue={textGeburtsdatum.Geburtsdatum}
                value={textGeburtsdatum}
              />
            ) : (
              <Text
                style={{
                  height: 40,
                  alignItems: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#737373',
                  outline: 'none',
                  paddingTop: 6,
                  fontSize: 20,
                  width: 250,
                }}>
                {textGeburtsdatum}
              </Text>
            )}

            <Text
              style={{
                height: 40,
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#737373',
                outline: 'none',
                paddingTop: 6,
                fontSize: 20,
                width: 250,
              }}></Text>

            <View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Kontakt', { paramKey: len, implanttype }) 
                }>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: 'center',
                    marginLeft: -5,
                    marginBottom: 10,
                    borderRadius: 4,
                    backgroundColor: '#e2e2e2',
                    padding: 7,
                    width: 260,
                  }}>
                  Fragen zu Ihren Implantaten? {'\n'} Hier finden Sie Antworten.{' '}
                  <AntDesign name="questioncircleo" size={20} color="black" />
                </Text>
              </TouchableOpacity>
            </View>


            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Notfall')}>
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: 'center',
                    marginLeft: -5,
                    marginBottom: 2,
                    borderRadius: 2,
                    backgroundColor: '#e2e2e2',
                    padding: 7,
                    width: 260,
                    marginTop: 1,
                  }}>
                  Notfallfunktion einstellen{' '}
                  <Ionicons name="settings-outline" size={20} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Adder2/>
        </View>

        <View>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              marginLeft: 10,
              marginBottom: 10,
              marginTop: -390,
            }}>
            Gesicherter oder ungesicherter Login?
          </Text>
        </View>
        <PickerSecuredLogin />
      </ScrollView>
    </View>
  );
}

export default React.memo(ProfileScreen);
