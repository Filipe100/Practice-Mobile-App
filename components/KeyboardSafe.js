import * as React from 'react';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, View } from 'react-native';

/*
    Creates a keyboard safe/aware view for a screen that avoids the on-screen keyboard and allows it to be dismissed.
    <KeyboardSafe>
      ...
    </KeyboardSafe>
 */
export function KeyboardSafe({children, style}) {

  if (Platform.OS === 'web') {

    return (
      <View style={style}>
        {children}
      </View>
    )

  } else {

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style}>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )

  }
}
