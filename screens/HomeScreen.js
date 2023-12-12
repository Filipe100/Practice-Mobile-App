import * as React from 'react';
import { Image, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { imageIndex } from '../constants/images';

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import Styles from "../styles/MainStyle";
import { MyButton } from '../components/MyButton';
import { TextH1, TextParagraph } from "../components/StyledText";


export default function HomeScreen(props) {

  const [isLogoColor, setIslogoColor] = React.useState(true);


  function showHelp() {
    props.navigation.replace('Root', {screen: 'Help'});
  }

  function toggleLogo() {
    setIslogoColor(!isLogoColor);
    //console.log('345345');
  }

  function showViewPeople() {
    props.navigation.replace('Root', {screen: 'People'});
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>
        
      <View style={Styles.homeLogoContainer}>
        <Pressable onPress={toggleLogo}>
          <Image source={imageIndex[isLogoColor ? 'logo' : 'mono']} style={Styles.homeLogo}/>
        </Pressable>
      </View>


        <View style={Styles.homeHeadingContainer}>
          <Text style={Styles.homeHeading}>ROI HR Management</Text>
        </View>
        <View style={Styles.homeButtonContainer}>
          <MyButton
            text="View Staff"
            type="major"      // default*|major|minor
            size="large"      // small|medium*|large
            buttonStyle={Styles.homeButton}
            onPress={showViewPeople}
          />
          <MyButton
            text="Show help"
            type="default"      // default*|major|minor
            size="large"      // small|medium*|large
            buttonStyle={Styles.homeButton}
            onPress={showHelp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}