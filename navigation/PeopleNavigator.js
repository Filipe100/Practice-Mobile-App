//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

// Import navigation and screens
import ViewPeopleScreen from '../screens/ViewPeopleScreen';

// Import styling and components
import Styles from "../styles/MainStyle";

//const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

export default function PeopleNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="ViewPeople"
      screenOptions={{
        headerShown: true,
        headerBackTitle: "Back",
        headerStyle: Styles.headerBar,
        headerTitleStyle: Styles.headerBarTitle,
      }}>
      <Stack.Screen
        name="ViewPeople"
        component={ViewPeopleScreen}
        options={{ title: 'View All People' }} />
    </Stack.Navigator>
  );
}