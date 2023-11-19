import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Styles from "../styles/MainStyle";
import Settings from "../constants/Settings";

// Change fontSize & lineHeight based on the global fontSizeModifier
function changeFontSize(styles) {
  
  // Get provided styles
  let styleObject = StyleSheet.flatten(styles);
  let newFontSize = {};
  let newLineHeight = {};

  // Update font size
  if (styleObject.fontSize) {
    newFontSize = {fontSize: styleObject.fontSize * Settings.fontSizeModifier};

    // Update line height
    if (styleObject.lineHeight) {
      newLineHeight = {lineHeight: styleObject.lineHeight * Settings.fontSizeModifier};
    }
  }

  // Return modified style
  return [styleObject, newFontSize, newLineHeight];
}

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function TextParagraph(props) {
  return <Text {...props} style={[changeFontSize(Styles.bodyText), props.style]} />;
}

export function TextListItem(props) {
  return (<TextParagraph {...props} style={[changeFontSize(Styles.listItem), props.style]}>
    <Ionicons
      name="md-square"
      size={10}
      style={Styles.listItemBullet}
    />
    {props.children}
  </TextParagraph>);
}

export function TextH1(props) {
  return <Text {...props} style={[changeFontSize(Styles.h1), props.style]} />;
}

export function TextH2(props) {
  return <Text {...props} style={[changeFontSize(Styles.h2), props.style]} />;
}

export function TextH3(props) {
  return <Text {...props} style={[changeFontSize(Styles.h3), props.style]} />;
}

export function TextLabel(props) {
  return <TextParagraph {...props} style={[changeFontSize(Styles.label), props.style]} />;
}
