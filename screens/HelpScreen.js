import * as React from 'react';
import { View, ScrollView, Pressable, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

// Import helper code
import Settings from '../constants/Settings';

// Import styling and components
import { TextParagraph, TextH1, TextH2, TextH3, TextListItem } from "../components/StyledText";
import Styles from "../styles/MainStyle";
import Colours from '../constants/Colours';
import { MyButton } from '../components/MyButton';




export default function HelpScreen(props) 
{


  const [fontSizeModifier, setFontSizeModifier]=React.useState(Settings.fontSizeModifier);

  function changeFontSize(fontSizeModifier) 
  {
    Settings.fontSizeModifier += fontSizeModifier;
    setFontSizeModifier(Settings.fontSizeModifier);
  }

  return (
    <SafeAreaView style={Styles.safeAreaView}>
      <ScrollView style={Styles.container} contentContainerStyle={Styles.contentContainer}>

        <View style={Styles.helpButtonContainer}>
          <MyButton
            text="- smaller"
            type="default"
            size="Medium"
            onPress={()=>{changeFontSize(-0.1)}}
            buttonStyle={Styles.helpButton}
          />

          <MyButton
            text="+ Bigger"
            type="default"
            size="Medium"
            onPress={()=>{changeFontSize(+0.1)}}
            buttonStyle={Styles.helpButton}
          />
        </View>

        <View style={{ padding: 0, marginLeft: 8, }}>        
           
          <TextH1>Account Management</TextH1>

          <TextParagraph style={[Styles.lightGrayLine, { paddingBottom: 15 }]}>
            To create an account, navigate to the app's sign-up or registration page. 
            Enter your valid email address and a secure password. Some apps might require additional information such as a username or phone number. 
            Follow the on-screen prompts to verify your account through a confirmation email or SMS code. 
            Once verified, your account will be successfully created, granting access to various features within the app.
          </TextParagraph>

        
          <TextH1>Navigation and Interface</TextH1>

          <TextParagraph style={[Styles.lightGrayLine, { paddingBottom: 15 }]}>
            Familiarize yourself with the app's layout by navigating through different sections and screens.
            Look for menu options, tabs, or icons that indicate various features or functionalities.
            Experiment with swiping, tapping, or using gestures to explore different parts of the app.
          </TextParagraph>

          <TextH1>Functionality and Features</TextH1>

          <TextParagraph style={[Styles.lightGrayLine, { paddingBottom: 15 }]}>
            Control the app's notification settings to tailor the alerts according to your preferences.
            Access the notification settings within the app or device settings to enable/disable notifications, adjust their frequency, or customize notification sounds.
          </TextParagraph>
         
          <TextH1>Troubleshooting and Support</TextH1>

          <TextParagraph style={[Styles.lightGrayLine, { paddingBottom: 15 }]}>
            In case of any queries or issues, contact customer support for assistance.
            Look for 'Contact Us,' 'Support,' or 'Help' options within the app.
            Customer support may be available through email, chat, or phone, depending on the app's support system.
          </TextParagraph>


        </View>
      </ScrollView>
    </SafeAreaView>
  );
}