import { Colors } from '../utils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentInternet = (props) => {

    const billPaymentInternetIcons = [
        { image: require("../../assets/images/smile_icon.png"), name: "Smile" },    
        { image: require("../../assets/images/spectranet_icon.png"), name: "Spectranet" },
        { image: require("../../assets/images/mtn_icon.png"), name: "Mtn" },
    ];

    return(
        <View style={styles.container}>
            <View >
                <Text style={styles.internet} >Internet Services</Text>
            </View>

            <FlatList 
                numColumns={4}
                data = {billPaymentInternetIcons}
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
    internet: {
        color: Colors.black,
        marginTop: 10,
    },
})

export default BillPaymentInternet;
