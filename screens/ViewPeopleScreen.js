import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';
import { RoiGetPeople } from '../utils/RoiApi';
import { PopupOk } from "../utils/Popup";

// Import styling and components
import { TextParagraph, TextH1, TextH2 } from "../components/StyledText";
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';


export default function ViewPeopleScreen(props) {

  // State - data for this component

  // Data array, default to empty array
  const [people, setPeople] = React.useState([])

  // Set "effect" to retrieve and store data - only run on mount/unmount (loaded/unloaded)
  // "effectful" code is something that triggers a UI re-render
  React.useEffect(refreshPersonList, [])

  // Refresh the person list data - call the API
  function refreshPersonList() {

    console.log("refresh person list")

    // Get data from the API
    RoiGetPeople()
      // Success
      .then(data => {
        // Store results in state variable
        setPeople(data)
      })
      // Error
      .catch(error => {
        PopupOk("API Error", "Could not get people from the server")
      })

  }

  function showAddPerson() {
    
    console.log("show add person...")

  }


  // Display all people data
  function displayPeople() {
    
    // Loop through each item and turn into appropriate output and then return the result
    return people.map(p => {

      // Create an output view for each item
      return (
        <View key={p.id}>
          <TextParagraph>{p.name}</TextParagraph>
        </View>
      )

    })
    
  }


  // Main output of the screen component
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      
      <View style={Styles.personButtonContainer}>
        <MyButton 
          text="+ Add new person"
          type="major"      // default*|major|minor
          size="small"      // small|medium*|large
          onPress={showAddPerson}
        />
        <MyButton 
          text="Refresh"
          type="default"    // default*|major|minor
          size="small"      // small|medium*|large
          onPress={refreshPersonList}
        />
      </View>
      
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
          
        <TextH1 style={{marginTop:0}}>Listing all people</TextH1>

        <View>
          {displayPeople()}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}