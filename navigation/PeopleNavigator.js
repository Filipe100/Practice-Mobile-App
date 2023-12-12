//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { imageIndex } from '../constants/images';
// Import navigation and screens
import ViewPeopleScreen from '../screens/ViewPeopleScreen';
import HelpScreen from '../screens/HelpScreen';
import EditPersonScreen from '../screens/EditPersonScreen';
import ViewPersonScreen from '../screens/ViewPersonScreen';
// Import styling and components
import Styles from "../styles/MainStyle";
import HomeScreen from '../screens/HomeScreen';
import HeaderBar from '../components/HeaderBar';
import AddPerson from '../screens/AddPersonScreen'
//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

  
export default function PeopleNavigator() 
{
    return (
        <Stack.Navigator initialRouteName="ViewPeople">

        <Stack.Screen
            name="ViewPeople"
            component={ViewPeopleScreen}

            options=
            {{
                header: () => <HeaderBar />, // using a custom component to change the styling to better reflect the figma design
            }}
        />        


          <Stack.Screen
            name="EditPerson"
            component={EditPersonScreen}

            options=
            {{
                header: () => <HeaderBar />, // using a custom component to change the styling to better reflect the figma design
            }}
         />  




         
        </Stack.Navigator>        
    );
}
  


