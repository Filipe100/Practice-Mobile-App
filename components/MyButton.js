import * as React from 'react';
import { Pressable, Text } from 'react-native';
import Styles from "../styles/MainStyle";

/*
    <MyButton
      text="Text"
      type="default*|major|minor"
      size="small|medium*|large"
      onPress={function}
      buttonStyle={customStyle}
      textStyle={customStyle}
    />
 */
export function MyButton(props) {

  // Determine button styling
  let buttonStyling = [Styles.button, props.style];
  let textStyling = [Styles.buttonText];

  switch(props.type) {
    case "major":
      buttonStyling.push(Styles.buttonMajor);
      textStyling.push(Styles.buttonMajorText);
      break;
    case "minor":
      buttonStyling.push(Styles.buttonMinor);
      textStyling.push(Styles.buttonMinorText);
      break;
  }
  
  switch(props.size) {
    case "large":
      buttonStyling.push(Styles.buttonLarge);
      textStyling.push(Styles.buttonLargeText);
      break;
    case "small":
      buttonStyling.push(Styles.buttonSmall);
      textStyling.push(Styles.buttonSmallText);
      break;
  }

  // Add custom button styles
  buttonStyling.push(props.buttonStyle);
  textStyling.push(props.textStyle);

  return (
    <Pressable
      onPress={props.onPress}
      // Merge default button styles with specified styles
      style={buttonStyling}>
      <Text style={textStyling}>{props.text}</Text>
    </Pressable>
  );
}
