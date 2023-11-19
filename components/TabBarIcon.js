import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';

import Colours from '../constants/Colours';
import Styles from "../styles/MainStyle";

export default function TabBarIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={28}
      style={Styles.navBarIcon}
      // Check if active - change colours
      color={props.focused ? Colours.tabIconSelected : Colours.tabIcon}
    />
  );
}
