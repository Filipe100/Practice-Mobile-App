import { Alert, Platform } from 'react-native';

// Check if web or mobile
const WEB = Platform.OS === 'web';

// Popup for displaying a message with OK button only
export function PopupOk(title, message) {

  // Check if Alert.alert() supported (not avail on web)
  if (!WEB) {
    Alert.alert(
      title, 
      message, 
      [
        {
          text: "OK",
        }
      ]
    );
  } else {
    alert(message);
  }
}

// Popup for displaying a message with OK & cancel buttons
export function PopupOkCancel(title, message, onPressOk, onPressCancel) {

  // Check if Alert.alert() supported (not avail on web)
  if (!WEB) {
    Alert.alert(
      title, 
      message, 
      [
        {
          text: "Cancel",
          onPress: onPressCancel,
        },
        {
          text: "OK",
          onPress: onPressOk,
        }
      ]
    );
  } else {
    confirm(message) ? onPressOk() : onPressCancel();
  }
}