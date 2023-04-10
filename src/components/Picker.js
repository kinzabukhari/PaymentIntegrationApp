import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Colors, Constants } from '../utils';
import {Picker} from '@react-native-picker/picker';

const NetworkPicker = ({ networkPicker, setNetworkPicker }) => {

    const networkProviders = [
        { network: "MTN", networkValue: "MTN" },
        { network: "Airtel", networkValue: "Airtel" },
        { network: "Glo", networkValue: "Glo" },
        { network: "9Mobile", networkValue: "9Mobile" },
    ];

    const renderNetworkProviders = () => {
        return networkProviders.map((item, index) => {
            return <Picker.Item key={index} label={item.network} value={item.networkValue} style={{fontSize: 14}}/>
        })
    };

    return (
        <View style={styles.pickerContainer}>
            <Picker
                mode={Constants.dropdown}
                selectedValue={networkPicker}
                onValueChange={(itemValue, itemIndex) => setNetworkPicker(itemValue)}
            >
                <Picker.Item value='' label={Constants.pickerLabel} enabled={false} color={Colors.black}/>
                {renderNetworkProviders()}
            </Picker>
        </View> 
    )

};

const styles= StyleSheet.create({
    pickerContainer: {
        borderColor: Colors.borderColor,
        borderWidth: 0.7,
        borderRadius: 6,
        marginVertical: 20,
    },

})

export default NetworkPicker;
