import * as React from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';

// Import helper code
import Settings from '../constants/Settings';
import { RoiDeletePerson, RoiGetDepartments, RoiGetPerson, RoiUpdatePerson } from '../utils/RoiApi';
import { PopupOk, PopupOkCancel } from '../utils/Popup';

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextLabel } from '../components/StyledText';
import Styles from '../styles/MainStyle';
import { MyButton } from '../components/MyButton';
// import { ButtonContainer } from '../components/ButtonContainer';


export default function EditPersonScreen(props) {

  // State - data for this component

  // Store a person in state
  // const [person, setPerson] = React.useState(personTemplate);

  const [id, setId] = React.useState(-1);
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [departmentId, setDepartmentId] = React.useState(0);
  const [street, setStreet] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [zip, setZip] = React.useState('');
  const [country, setCountry] = React.useState('');

  // Store the original name of the person separately (for displaying in the title)
  const [nameOriginal, setNameOriginal] = React.useState('');

  // Store list of departments (picker / drop down list)
  const [departments, setDepartments] = React.useState([]);

  // Set "effect" to retrieve and store data - only run on mount/unmount (loaded/unloaded)
  // "effectful" code is something that triggers a UI re-render

  React.useEffect(refreshDepartments, []);
  React.useEffect(refreshPerson, []);

  // Refresh the departments data - call the API
  function refreshDepartments() {
    // Get data from the API
    RoiGetDepartments()
      // Success
      .then((data) => {
        // Store results in state variable
        setDepartments(data);
      })
      // Error
      .catch((error) => {
        PopupOk('API Error', 'Could not get departments from the server');
      });
  }

  // Refresh the person data - call the API
  function refreshPerson() {
    // Get person ID passed to this screen (via props)
    const id = props.route.params.id;

    // Get data from the API
    RoiGetPerson(id)
      // Success
      .then((p) => {
        // Store results in state variable (if data returned)
        if (p) {
          setId(p.id);
          setName(p.name);
          setNameOriginal(p.name);
          setPhone(p.phone);
          setDepartmentId(p.departmentId ?? 0);
          setStreet(p.street);
          setCity(p.city);
          setState(p.state);
          setZip(p.zip);
          setCountry(p.country);
        }
      })
      // Error
      .catch((error) => {
        // Display error
        PopupOk('API Error', 'Could not get person from the server');
        // OPTIONAL: navigate back to ViewPeople screen
        props.navigation.navigate('ViewPeople');
      });
  }

  function showViewPeople() {
    props.navigation.replace('Root', { screen: 'People' });
  }

  // Display the department picker list items

  function DisplayDepartmentListItems() {
    // Loop through each item and turn into a Picker
    return departments.map((d) => {
      return <Picker.Item key={d.id} label={d.name} value={d.id} />;
    });
  }

  /**
   * Edit a person from the database
   */
  function editPerson() {
    // Update the person using the API
    RoiUpdatePerson(id, name, phone, departmentId, street, city, state, zip, country)
      .then((data) => {
        // Show confirmation that the person has been edit
        PopupOk('Person saved', `${nameOriginal} has been  saved`);

        // Go back to the person list (ViewPeople)
        // props.navigation.navigate("ViewPeople");
        props.navigation.replace('Root', { screen: 'People' });
      })
      .catch((error) => {
        // Display error
        PopupOk('API Error', error);
      });
  }

  // Main output of the screen component
// Main output of the screen component
return (
  <SafeAreaView style={Styles.safeAreaView}>
    <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
      <TextH1 style={{ marginTop: 0 }}>Edit: {nameOriginal}</TextH1>

      <View style={Styles.form}>
        <View style={Styles.fieldSet}>
          <TextParagraph style={Styles.legend}>Details</TextParagraph>

          

          <View style={Styles.formRow}>
            <TextLabel>Name:</TextLabel>
            <TextInput value={name} onChangeText={setName} style={Styles.textInput} />
          </View>
          <View style={Styles.formRow}>
            <TextLabel>Phone:</TextLabel>
            <TextInput value={phone} onChangeText={setPhone} style={Styles.textInput} />
          </View>
          <View style={Styles.formRow}>
            <TextLabel>Department:</TextLabel>
            {/* <TextInput value={departmentId} onChangeText={setDepartmentId} style={Styles.textInput} /> */}
            <Picker selectedValue={departmentId} onValueChange={setDepartmentId} style={Styles.picker} itemStyle={Styles.pickerItem}>
              {DisplayDepartmentListItems()}
            </Picker>
          </View>
        </View>

        <View style={Styles.fieldSet}>
          <TextParagraph style={Styles.legend}>Address</TextParagraph>

          <View style={Styles.formRow}>
            <TextLabel>Street:</TextLabel>
            <TextInput value={street} onChangeText={setStreet} style={Styles.textInput} />
          </View>
          <View style={Styles.formRow}>
            <TextLabel>City:</TextLabel>
            <TextInput value={city} onChangeText={setCity} style={Styles.textInput} />
          </View>
          <View style={Styles.formRow}>
            <TextLabel>State:</TextLabel>
            <TextInput value={state} onChangeText={setState} style={Styles.textInput} />
          </View>
          <View style={Styles.formRow}>
            <TextLabel>Zip:</TextLabel>
            <TextInput value={zip} onChangeText={setZip} style={Styles.textInput} />
          </View>
          <View style={Styles.formRow}>
            <TextLabel>Country:</TextLabel>
            <TextInput value={country} onChangeText={setCountry} style={Styles.textInput} />
          </View>
        </View>
      </View>

      <View style={[Styles.personButtonContainer, { borderBottomWidth: 0 }]}>
        <MyButton
          text="Save"
          type="major" // default*|major|minor
          size="medium" // small|medium*|large
          onPress={editPerson}
        />
        <MyButton
          text="Cancel"
          type="minor" // default*|major|minor
          size="medium" // small|medium*|large
          onPress={showViewPeople}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
}
