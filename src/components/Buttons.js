import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Constants } from '../utils';

const GreenButton = (props) => (
    <View>
        <TouchableOpacity style={[ styles.greenButtonContainer , props.style]} onPress={props.onPress}>
            <Text style={styles.buttonCaption}>{props.caption}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    greenButtonContainer: {
        backgroundColor: Colors.greenButton,
        justifyContent: Constants.center,
        alignItems: Constants.center,
        alignContent: Constants.center,
        borderRadius: 10,
        height: 50,
    },
    buttonCaption: {
        color: Colors.buttonWhite,
        fontSize: 16,
        fontWeight: Constants.fiveHundred,
        fontStyle: Constants.normal,
        
    },

});

export { GreenButton,  };
