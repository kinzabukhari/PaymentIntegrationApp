import { Colors, Constants } from '../utils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentAirtime = (props) => {

    const billPaymentAirtimeIcons = [
        { image: require("../../assets/images/mtn_icon.png"), name: "MTN" },
        { image: require("../../assets/images/airtel_icon.png"), name: "Airtel"  },
        { image: require("../../assets/images/glo_icon.png"), name: "Glo"  },    
        { image: require("../../assets/images/9mobile_icon.png"), name: "9Mobile"  },   
    ];

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.airtime} >Airtime</Text>
            </View>

            <FlatList 
                numColumns={4}
                data = {billPaymentAirtimeIcons}
                keyExtractor={(item, itemIndex) => itemIndex}
                renderItem={props.renderItem} 
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    //   backgroundColor: Colors.white,
    },
    airtime: {
        color: Colors.black,
    }
});

export default BillPaymentAirtime;
