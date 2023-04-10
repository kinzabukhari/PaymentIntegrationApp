import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import WalletIcon from "../../assets/images/empty_wallet_icon.png";
import FcmbIcon from "../../assets/images/fcmb_icon.png";
import GtcoIcon from "../../assets/images/gtco_icon.png";
import { Colors, Constants } from '../utils';

const WalletButtonGroup = ({ buttons }) => {

    const [clickedId, setClickedId]=useState(0)

    const handleClick = (item, id) => {
      setClickedId(id)
    }
  
    return (
      <View style={styles.container}>
        {
            buttons.map((buttonLabel, index)=>{
                return(
                    <View>
                        <TouchableOpacity
                            onPress={(item)=>handleClick(item, index)} 
                            key={index}
                            style={[index === clickedId? styles.buttonActive: styles.button, 
                                index === 0 ? {borderTopLeftRadius: 10, borderBottomLeftRadius: 10}: '',
                                index === 1 ? {borderTopRightRadius: 10, borderBottomRightRadius: 10}: '',
                            ]}  
                        >
                            <View style={styles.radioContainer}>
                                <Image 
                                    style={styles.image} 
                                    source={index ===0 ? WalletIcon : index===1 ? FcmbIcon : GtcoIcon}
                                />
                                <Text style={[index === clickedId? styles.textActive: styles.text]}>{buttonLabel}</Text>
                                <View style={[index === clickedId? styles.radioActive: styles.radio]} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.view} />
                    </View>
    
                )
            })
        }
      </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        width: Constants.hundredPerCent,
        backgroundColor: Colors.white
    },
    button:{
        height: 50,
        paddingLeft: 20,
        justifyContent: Constants.center,
        borderRadius: 5,
        backgroundColor: Colors.radioButtonColor,
    },
    buttonActive:{
        height: 50,
        justifyContent: Constants.center,
        paddingLeft: 20,
        backgroundColor: Colors.radioButtonColor,
        borderRadius: 5,
    },
    text:{
        color: Colors.black,
        fontSize: 12,
    },
    textActive:{
        color: Colors.black,
        fontSize: 12,
    },
    radio:{
        marginLeft: 15,
        borderRadius: 50,
        width: 15,
        height: 15,
        borderWidth: 1,
        borderColor: Colors.black,
    },
    radioActive:{
        marginLeft: 15,
        borderRadius: 50,
        width: 15,
        height: 15,
        borderWidth: 4,
        borderColor: Colors.darkGreen,
    },
    radioContainer:{
        flexDirection: Constants.row,
    },
    image:{
        marginRight: 15,
        width: 15,
        height: 15
    },
    view:{
        backgroundColor: Colors.white,
        paddingVertical: 7,
    }
});

export default WalletButtonGroup;
