import { Colors, Constants } from '../utils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentTvBills = (props) => {

    const billPaymentTvBillsIcons = [
        { image: require("../../assets/images/dstv.png"), name: "DSTV" },
        { image: require("../../assets/images/gotv.png"), name: "DSTV" },
        { image: require("../../assets/images/dstv.png"), name: "DSTV" },    
        { image: require("../../assets/images/dstv.png"), name: "DSTV" },   
    ];

    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.tvBills} >TV Bills</Text>
            </View>

            <FlatList 
                numColumns={4}
                data = {billPaymentTvBillsIcons}
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
    tvBills: {
        color: Colors.black,
        marginVertical: 10,
    }
});

export default BillPaymentTvBills;
