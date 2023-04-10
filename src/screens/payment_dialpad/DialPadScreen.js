import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import styles from './DialPadStyles';
import MTNIcon from "../../../assets/images/mtn_icon.png";
import AirtelIcon from "../../../assets/images/airtel_icon.png";
import GloIcon from "../../../assets/images/glo_icon.png";
import NineMobileIcon from "../../../assets/images/9mobile_icon.png";
import FingerprintIcon from "../../../assets/images/fingerprint_icon.png"
import { HeaderText, NormalText, SmallText } from '../../components/CustomText';
import { KeypadIcon } from '../../components/KeypadIcon';
import { Constants } from '../../utils';
import NetworkPicker from '../../components/Picker';

const DialPadScreen = ({ navigation, route }) => {

    const airtimeAmount = route.params.amount
    const network = route.params.networkPicker

    const handleNavigation = () => navigation.navigate("Home");

    const NetworkImage = () => {
        if (network === "MTN") return <Image source={MTNIcon} />;
        else if (network === "Airtel") return <Image source={AirtelIcon} />;
        else if (network === "Glo") return <Image source={GloIcon} />;
        else if (network === "9Mobile") return <Image source={NineMobileIcon} />;
        else return <NormalText caption={"Network Image not available"} />;    
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={handleNavigation} style={styles.iconView}>
                <NetworkImage />
            </TouchableOpacity>

            <SmallText caption={network} />

            <HeaderText caption={airtimeAmount} style={styles.amount} />

            <NormalText 
                caption={Constants.dialpadCaption} 
                style={styles.pinInstructions}
            />

            <View style={styles.passcodeView}>
                <View style={styles.passcodeIcon} />
                <View style={styles.passcodeIcon} />
                <View style={styles.passcodeIcon} />
                <View style={styles.passcodeIcon} />
            </View>

            <View style={styles.keypadContainer} >
                <KeypadIcon caption={`1`} />
                <KeypadIcon caption={`2`} />
                <KeypadIcon caption={`3`} />
                <KeypadIcon caption={`4`} />
                <KeypadIcon caption={`5`} />
                <KeypadIcon caption={`6`} />
                <KeypadIcon caption={`7`} />
                <KeypadIcon caption={`8`} />
                <KeypadIcon caption={`9`} />
                <TouchableOpacity style={styles.fingerprintView} >
                    <Image source={FingerprintIcon} />
                </TouchableOpacity>
                <KeypadIcon caption={`0`} />
                <KeypadIcon style={styles.hiddenKeypadIcon}/>


            </View>

        </View>
    )
};

export default DialPadScreen;
