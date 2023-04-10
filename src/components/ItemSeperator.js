import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors, Constants } from '../utils'; 

const ItemSeparator = () => (
    <View style={styles.itemSeperator}/>
);

const styles = StyleSheet.create({
    itemSeperator: {
        height: 2,
        width: Constants.hundredPerCent,
        backgroundColor: Colors.gray
    }
});

export { ItemSeparator };