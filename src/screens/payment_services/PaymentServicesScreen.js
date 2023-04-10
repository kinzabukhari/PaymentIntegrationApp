import { Image, Text, TouchableOpacity, ToastAndroid, View } from 'react-native'
import React, { useState } from 'react';
import styles from './PaymentServicesStyles';
import { NormalText, SmallText } from '../../components/CustomText';
import NetworkPicker from '../../components/Picker';
import { ContactInput, CustomInput } from '../../components/Inputs';
import ContactBookIcon from "../../../assets/images/contact_book_icon.png";
import { GreenButton } from '../../components/Buttons';
import WalletButtonGroup from '../../components/WalletRadioButtons';
import { Constants } from '../../utils';

const PaymentServicesScreen = ({ navigation }) => {
    const [networkPicker, setNetworkPicker] = useState("");
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [categoryClicked, setCategoryClicked] = useState(false);
    const [validates, setValidates] = useState(false);

    const handleNavigation = () => {
        console.log(networkPicker)
        if (amount !== ""){
            setValidates(!validates)
        } else {
            ToastAndroid.show("You have not entered an amount", ToastAndroid.SHORT);
            // ToastAndroid.showWithGravity(
            //     "All Your Base Are Belong To Us",
            //     ToastAndroid.SHORT,
            //     ToastAndroid.TOP
            // );
        } 

        if (networkPicker !== ""){
            setValidates(!validates)
        } else {
            ToastAndroid.show("You have not selected a network provider", ToastAndroid.SHORT);
        } 

        if (validates) {
            navigation.navigate("Dialpad", { amount, networkPicker });
        }

    };

    const toggleCategory = () => setCategoryClicked(!categoryClicked)

    return (
        <View style={styles.container}>
            
            <SmallText caption={Constants.networkProvider} onPress={handleNavigation} />

            <NetworkPicker networkPicker={networkPicker} setNetworkPicker={setNetworkPicker} />

            <View style={styles.sectionContainer}>
                <SmallText caption={Constants.category} style={styles.sectionHeaderText}/> 
                <View style={styles.categoryStyles}>
                    {
                        categoryClicked ?
                        <TouchableOpacity style={styles.activeCategory} >
                            <Text style={styles.activeText}>{Constants.mobileTopUp}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.inactiveCategory} onPress={toggleCategory}>
                            <Text style={styles.inactiveText}>{Constants.mobileTopUp}</Text>
                        </TouchableOpacity>
                    }

                    {
                        !categoryClicked ?
                        <TouchableOpacity style={styles.activeCategory} >
                            <Text style={styles.activeText}>{Constants.dataBundle}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.inactiveCategory} onPress={toggleCategory}>
                            <Text style={styles.inactiveText}>{Constants.dataBundle}</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>

            <SmallText caption={Constants.amount} />

            <CustomInput 
                placeholder={Constants.enterAmount}
                onChangeText={(text) => setAmount(text)}
                value={amount}
                keyboardType={Constants.numeric}
            />
            
            <SmallText caption={Constants.phoneNumber} />
            
            <View style={styles.contactInputView}>
                <ContactInput
                    placeholder={Constants.enterPhoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    value={phoneNumber}
                    keyboardType={Constants.phonePad}
                    style={styles.contactInput}
                />
                <View style={styles.contactIconView}>
                    <TouchableOpacity style={styles.contactTouch}>
                        <Image source={ContactBookIcon} />
                        <SmallText caption={Constants.contacts} style={styles.contactIconText}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.payWithView}>
                <View style={styles.payWithBorder} />
                    <SmallText caption={Constants.payWith} />
                <View style={styles.payWithBorder} />
            </View>
            
            <WalletButtonGroup 
                buttons={[
                `9PSB Wallet                                 Balance: 434,533,000`,
                `Bank                                                         Balance: 23,000`, 
                `Bank                                                         Balance: 23,000`
                ]}
            />

            <GreenButton caption={Constants.purchase} onPress={() => handleNavigation(amount)}/>

        </View>
    );
};

export default PaymentServicesScreen;
