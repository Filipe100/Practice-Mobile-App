import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { infoMessage} from '../utils/flashMessage';
import NetInfo from '@react-native-community/netinfo';

// Import helper code
import Settings from '../constants/Settings';
import { RoiDeletePerson, RoiGetPeople } from '../utils/RoiApi';
import { PopupOk, PopupOkCancel } from "../utils/Popup";

// Import styling and components
import { TextParagraph, TextH1, TextH2} from "../components/StyledText";
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { ButtonContainer } from '../components/ButtonContainer';

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
    // Navigate to AddPerson and replace the current screen
    props.navigation.replace('Root', { screen: 'AddPerson' });
  }

  function showViewPerson(person) {
    // Navigate to ViewPerson and pass through the person's ID as a param
    props.navigation.navigate('ViewPerson', { id: person.id });
  }

  function showEditPerson(person) {
    // Navigate to EditPerson and pass through the person's ID as a param
    props.navigation.navigate('EditPerson', { id: person.id });
  }

  /**
   * Delete a person from the database
   * @param {Person} person The person to delete.
   */
  function deletePerson(person) {
    // Check if person should be deleted (confirm with user)
    PopupOkCancel(
      // Title and message
      'Delete person?',
      `Are you sure you want to delete ${person.name}`,

      // 0K - delete the person
      () => {
        // Delete the person using the API
        RoiDeletePerson(person.id)
          .then((data) => {
            // Show confirmation that the person has been deleted
            PopupOk('Person deleted', `${person.name} has been  deleted`);
            // Refresh the person list
            refreshPersonList();
          })
          .catch((error) => {
            // Display error
            PopupOk('API Error', 'Could not delete person');
          });
        // console.log('Ok.. deleting person');
      },
      // Cancel do nothing
      () => {
        console.log('Cancel - no delete for you!');
      }
    );
  }

  // Display flash message banner if offline
  function displayConnectionMessage() {
    console.log('displayConnectionMessage');
    // Get network connection status
    NetInfo.fetch().then((status) => {
      // Check if not connected to the Internet
      if (!status.isConnected) {
        // Display the flash message
        infoMessage('No internet connection', 'You will only see cached data until you \nhave an active internet connection again');
      }
    });
  }

  /**
   * Delete a person from the database
   * @param {Person} person The person to delete.
   */
  // function deletePerson(person) {
  //   // Check if person should be deleted (confirm with user)
  //   PopupOkCancel(
  //     // Title and message
  //     'Delete person?',
  //     `Are you sure you want to delete ${person.name}`,

  //     // 0K - delete the person
  //     () => {
  //       // Delete the person using the API
  //       RoiDeletePerson(person.id)
  //         .then((data) => {
  //           // Show confirmation that the person has been deleted

  //           PopupOk('Person deleted', `${person.name} has been  deleted`);
  //           // Refresh the person list
  //           refreshPersonList();
  //         })
  //         .catch((error) => {
  //           // Display error
  //           PopupOk('API Error', 'Could not delete person');
  //         });
  //       // console.log('Ok.. deleting person');
  //     },
  //     // Cancel do nothing
  //     () => {
  //       console.log('Cancel - no delete for you!');
        
  //     }
  //   );
  // }

  // // Display flash message banner if offline
  // function displayConnectionMessage() {
  //   console.log('displayConnectionMessage');
  //   // Get network connection status
  //   NetInfo.fetch().then((status) => {
  //     // Check if not connected to the Internet
  //     if (!status.isConnected) {
  //       // Display the flash message
  //       infoMessage('No internet connection', 'You will only see cached data until you \nhave an active internet connection again');
  //     }
  //   });
  // }

  // Display all people data
  function displayPeople() {
    
    // Loop through each item and turn into appropriate output and then return the result
    return people.map(p => {

      // Create an output view for each item
      return (
        <View key={p.id} style={Styles.dataContainerHorizontal}>
          <View style={Styles.personListItemDetails}>
          <TextParagraph style={Styles.label}>{p.name}</TextParagraph>
          <TextParagraph>{p.department?.name ?? '---'}</TextParagraph>
          <TextParagraph >{p.phone}</TextParagraph>
          </View>
          <ButtonContainer direction="column">
            <MyButton 
              text="Info"
              type="major"
              size="small"
              buttonStyle={Styles.personListItemButton}
              textStyle={Styles.personListItemButtomText}
              onPress={() => showViewPerson(p)}
            />
            <MyButton          
              text="Edit"
              type="default"
              size="small" 
              buttonStyle={Styles.personListItemButton}
              textStyle={Styles.personListItemButtomText}
              onPress={() => showEditPerson(p)}
            />
            <MyButton          
              text="Delete"
              type="minor"
              size="small" 
              buttonStyle={Styles.personListItemButton}
              textStyle={Styles.personListItemButtomText}
              onPress={() => deletePerson(p)}
            />
          </ButtonContainer>
        </View>
      )

    })
    
  }


  // Main output of the screen component
  return (
    <SafeAreaView style={Styles.safeAreaView}>
      
 
      
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
          
      

        <View>
          {displayPeople()}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}