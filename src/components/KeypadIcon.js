import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors, Constants } from '../utils';

const KeypadIcon = (props) => (
    <TouchableOpacity style={[styles.keypad, props.style]} >
        <Text style={styles.passcodeText}>{props.caption}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    keypad: {
        width: 80,
        height: 80,
        borderRadius: 75,
        backgroundColor: Colors.gray,
        alignItems: Constants.center,
        justifyContent: Constants.center,
        margin: 8,
    },
    passcodeText: {
        fontSize: 24,
        fontWeight: Constants.sevenHundred,
        fontStyle: Constants.normal,
        color: Colors.black,
    }
});

export { KeypadIcon, }
