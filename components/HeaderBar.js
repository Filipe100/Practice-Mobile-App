import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Styles from "../styles/MainStyle";


export function HeaderBar() 
{
    return (
        // what is shown here is basically a box within a box changing the styling of the box as the boxes go deeper 
        // the key word 'View' are the boxes
        <View style={[Styles.lightGrayLine]}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 25, marginTop: 25, marginBottom: 25, marginLeft: 25, marginRight: 25}}>

                <Image
                    source={require('../assets/images/roi-logo.jpg')} 
                    style={{ width: 100, height: 100, resizeMode: 'contain' }}
                /> 
                <Text style={[Styles.headerBarTitle]}>View All Staff</Text>

            </View>
        </View>
    )
}

export default HeaderBar; // exporting the component so it can be used in other areas of the application