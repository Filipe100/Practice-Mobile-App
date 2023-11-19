import * as React from 'react';
import { Image, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";


export default function HomeScreen(props) {

  function showHelp() {
    props.navigation.replace('Root', {screen: 'Help'});
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        
        <TextH1>This is the home screen</TextH1>

        <TextParagraph>Here is some sample text for the home screen.</TextParagraph>

        <TextParagraph>There is no place like 127.0.0.1</TextParagraph>
        
        <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 40}}>
          <MyButton
            text="Show help screen"
            type="major"      // default*|major|minor
            size="large"      // small|medium*|large
            onPress={showHelp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}