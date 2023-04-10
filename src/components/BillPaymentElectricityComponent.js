import { Colors } from '../utils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentElectricity = (props) => {
    const billPaymentElectricityIcons = [
        { image: require("../../assets/images/ikedc_icon.png"), name: "IKEDC" },
        { image: require("../../assets/images/ekedc_icon.png"), name: "EKEDC" },
        { image: require("../../assets/images/kedco_icon.png"), name: "KEDCO" },    
        { image: require("../../assets/images/aedc_icon.png"), name: "AEDC" },   
    ];

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.electricity} >Electricity</Text>
            </View>
            <FlatList 
                numColumns={4}
                data = {billPaymentElectricityIcons}
                keyExtractor={(item, itemIndex) => itemIndex}
                renderItem={props.renderItem} 
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
    },
    electricity: {
        color: Colors.black,
        marginTop: 10,
    }
});

export default BillPaymentElectricity;
