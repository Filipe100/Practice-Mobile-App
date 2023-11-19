import { StyleSheet, Platform, StatusBar } from "react-native";
import Colours from "../constants/Colours";

export default StyleSheet.create({

    // Add status bar space for Android (<SafeAreaView> currently only works on iOS)
    safeAreaView: {  
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    
    // GENERAL STYLES
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 10,
        paddingTop: 20,
    },
    bodyText: {
        marginVertical: 5,
        fontSize: 17,
        color: '#2F4F4F',  // COLOUR: dark grey
        lineHeight: 24,
    },
    h1: {
        marginTop: 30,
        marginBottom: 5,
        fontSize: 30,
        color: '#008B8B',  // COLOUR: primary colour 1
        lineHeight: 35,
    },
    h2: {
        marginTop: 20,
        marginBottom: 5,
        fontSize: 24,
        color: '#20B2AA',  // COLOUR: primary colour 2
        lineHeight: 24,
    },
    h3: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 20,
        color: '#778899',  // COLOUR: medium grey
        lineHeight: 25,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingLeft: 50,
        fontSize: 17,
    },
    listItemBullet: {
        position: 'absolute',
        top: 1,
        left: 30,
    },
    button: {
        paddingVertical: 13,
        paddingHorizontal: 26,
        backgroundColor: '#778899',  // COLOUR: medium grey
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    buttonMajor: {
        backgroundColor: '#008B8B',  // COLOUR: primary colour 1
    },
    buttonMajorText: {
        color: 'white',
    },
    buttonMinor: {
        backgroundColor: '#C0C0C0',  // COLOUR: light grey
    },
    buttonMinorText: {
        color: '#2F4F4F',  // COLOUR: dark grey
    },
    buttonSmall: {
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonSmallText: {
        fontSize: 16,
    },
    buttonLarge: {
        paddingVertical: 22,
        paddingHorizontal: 36,
    },
    buttonLargeText: {
        fontSize: 20,
    },
    form: {
        marginVertical: 10,
    },
    fieldSet: {
        marginVertical: 15,
        paddingTop: 15,
        paddingBottom: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#C0C0C0',  // COLOUR: light grey
        borderRadius: 5,
    },
    legend: {
        position: 'absolute',
        top: -18,
        left: 5,
        margin: 0,
        paddingHorizontal: 5,
        paddingVertical: 0,
        color: '#1E90FF',  // COLOUR: main secondary colour
        backgroundColor: 'white',
    },
    formRow: {
        flex: 1,
        flexDirection: 'row',
        flexBasis: "auto",
        marginVertical: 2,
    },
    label: {
        width: 110,
        flexGrow: 0,
        flexShrink: 0,
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 17,
    },
    textInput: {
        flexGrow: 1,
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: '#C0C0C0',  // COLOUR: light grey
        borderRadius: 3,
    },
    picker: {
        flexGrow: 1,
        width: "100%",
        height: 42,
        // maxHeight: 40,
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderWidth: 1,
        borderColor: '#C0C0C0',  // COLOUR: light grey
        borderRadius: 3,
    },
    pickerItem: {
        height: 42,
    },
    
    // HEADER
    
    headerBar: {
        backgroundColor: 'white',
    },
    headerBarTitle: {
        color: '#008B8B',  // COLOUR: primary colour 1
        textAlign: 'left',
    },

    // FOOTER NAVIGATION

    navBar: {
        backgroundColor: '#2F4F4F',  // COLOUR: dark grey
    },
    navBarIcon: {
        marginBottom: -5
    },
    navBarLabel: {
        marginBottom: 3
    },

    // HOME SCREEN



    // HELP SCREEN


    

    // VIEW PEOPLE SCREEN

    personButtonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    
});
